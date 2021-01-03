---
title: Pixel Streaming Primer
date: 2020-10-11
categories:
 - UE4
 - Guide
tags:
 - Game Development
 - Advanced
 - Pixel Streaming
isShowComments: false
publish: true
---

::: danger Attention
Work In Progress. Information might not be applicable.
:::

<!-- @flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend -->


https://docs.unrealengine.com/en-US/Platforms/PixelStreaming/PixelStreamingIntro/index.html

1. create 3rd person blueprint project from template
2. Add -AudioMixer to commandlist
3. Package game
4. Open folder of packaged project
5. Create shortcut of .exe
6. Add `-AudioMixer -PixelStreamingIP=localhost -PixelStreamingPort=8888` to target of shortcut

>When everything works, add `-RenderOffScreen` to the target as well.

1. Inside the folder navigate to `\WindowsNoEditor\Engine\Source\Programs\PixelStreaming\WebServers\SignallingWebServer`
2. Run `run.bat`

>Make sure to have NodeJS installed on your machine, otherwise this won't work.

1. You should get something like this as your console output:

```
18:49:39.916 WebSocket listening to Streamer connections on :8888
18:49:39.916 WebSocket listening to Players connections on :80
18:49:39.917 Http listening on *: 80
```
2. Navigate back to the packaged game executable
3. Run the game via the shortcut with the targets we defined earlier
4. After our game starts we should see `18:52:20.899 Streamer connected: ::1` being printed inside our console

Now we would like to play our game using another device in our home network, perhaps a mobile phone. Let's make the appropriate changes.

1. Open `ipconfig` via command-prompt
2. Copy the IPv4 Address (should look something like this: `192.168.1.34`)
3. Change the `PixelStreamingIP=` argument to the IPv4 Address
4. Run the game again
5. Open the IP-Adress on your mobile browser.
6. Follow the instructions on the screen.

Voila, this should work.

### Quality of life additions

#### Disable rendering on host machine

1. Add following flag to the executable target: `-RenderOffScreen`
2. Run the server script
3. Run the game via the shortcut with the targets we defined

Since we won't have a windows available for us to close the game instance, we need to look for the runtime via `Windows Task Manager`
The task name is equivalent to the project name.

---

## Going worldwide

1. Make sure that you have a port open. `8080` is prefereable.
2. Since I can't open port `8080`, I've opened port `7777` on my router.

1. Run the `Start_AWS_WithTURN_SignallingServer.ps1` script with following command-line arguments:
    `--PublicIp=78.54.233.255 --httpPort=7777`

You should check your personal PublicIp beforehand.
The Port has to be some port that is open on your router.

2. Run the game
3. Open the browser @ `78.54.233.255:7777`
4. Done

### Know Issue

Currently the following error occurs with this approach:

```
Assertion failed: PeerConnection
[File:D:/Build/++UE4+Licensee/Sync/Engine/Plugins/Media/PixelStreaming/Source/PixelStreaming/Private/Streamer.cpp] [Line: 226]
```

Corresponding codeblock:

```cpp
File: Streamer.cpp
200: 
201: void FStreamer::CreatePlayerSession(FPlayerId PlayerId)
202: {
203: 	check(PeerConnectionFactory);
204: 
205: 	if (bPlanB)
206: 	{
207: 		verifyf(!Players.Find(PlayerId), TEXT("player %u already exists"), PlayerId);
208: 	}
209: 	else
210: 	{
211: 		// With unified plan, we get several calls to OnOffer, which in turn calls
212: 		// this several times.
213: 		// Therefore, we only try to create the player if not created already
214: 		if (Players.Find(PlayerId))
215: 		{
216: 			return;
217: 		}
218: 	}
219: 
220: 	webrtc::FakeConstraints Constraints;
221: 	Constraints.AddOptional(webrtc::MediaConstraintsInterface::kEnableDtlsSrtp, "true");
222: 
223: 	bool bOriginalQualityController = Players.Num() == 0; // first player controls quality by default
224: 	TUniquePtr<FPlayerSession> Session = MakeUnique<FPlayerSession>(*this, PlayerId, bOriginalQualityController);
225: 	rtc::scoped_refptr<webrtc::PeerConnectionInterface> PeerConnection = PeerConnectionFactory->CreatePeerConnection(PeerConnectionConfig, webrtc::PeerConnectionDependencies{ Session.Get() });
226: 	check(PeerConnection);
227: 	Session->SetPeerConnection(PeerConnection);
228: 	Players.Add(PlayerId) = MoveTemp(Session);
229: }
230: 

```

---

## Going worldwide via localtunnel

We will use the `localtunnel` npm package to make our Pixel Streaming Server available worldwide. This way, friends can check out the stuff that you're building. Also, clients for ArchViz can access your Server with ease.

### How it works

Localtunnel will map a local port to a temporary online web adress.
Let's start.

1. Run `npm i localtunnel -g`
2. Open cmd
3. Run `lt -p 8000`

> We take whatever port we are running our Pixel Streaming Server on and pass it as an argument to LocalTunnel. LocalTunnel maps whatever local server we have running on the port specified to a globally accessible web adress.

After running above command you'll get something like this:

```
your url is: https://neat-monkey-83.loca.lt
```

Send this adress to your friend. Voila, we have successfully connected our Pixel Streaming Server to the web and made it available outside our home network. Pretty neat, right?

>Make sure that you have your game instance and server running as well, otherwise this won't work.

### If you used a custom IP Adress as a target

use `lt -p 8000 -l YOUR_IP_ADRESS` instead. (not tested)
To make sure this works without any issues, just use `localhost` as your IP target.

---

# Customizing the Webview

We'll look at things like:

- disabling user input
- Refactoring the website code into a standart React app
- Refactoring the webUI using the very cool [PCUI](https://github.com/playcanvas/pcui) library
