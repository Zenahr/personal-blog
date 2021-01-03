(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{506:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"},[t._v("Attention")]),a("p",[t._v("Work In Progress. Information might not be applicable.")])]),t._v(" "),a("p",[t._v("https://docs.unrealengine.com/en-US/Platforms/PixelStreaming/PixelStreamingIntro/index.html")]),t._v(" "),a("ol",[a("li",[t._v("create 3rd person blueprint project from template")]),t._v(" "),a("li",[t._v("Add -AudioMixer to commandlist")]),t._v(" "),a("li",[t._v("Package game")]),t._v(" "),a("li",[t._v("Open folder of packaged project")]),t._v(" "),a("li",[t._v("Create shortcut of .exe")]),t._v(" "),a("li",[t._v("Add "),a("code",[t._v("-AudioMixer -PixelStreamingIP=localhost -PixelStreamingPort=8888")]),t._v(" to target of shortcut")])]),t._v(" "),a("blockquote",[a("p",[t._v("When everything works, add "),a("code",[t._v("-RenderOffScreen")]),t._v(" to the target as well.")])]),t._v(" "),a("ol",[a("li",[t._v("Inside the folder navigate to "),a("code",[t._v("\\WindowsNoEditor\\Engine\\Source\\Programs\\PixelStreaming\\WebServers\\SignallingWebServer")])]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("run.bat")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Make sure to have NodeJS installed on your machine, otherwise this won't work.")])]),t._v(" "),a("ol",[a("li",[t._v("You should get something like this as your console output:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("18:49:39.916 WebSocket listening to Streamer connections on :8888\n18:49:39.916 WebSocket listening to Players connections on :80\n18:49:39.917 Http listening on *: 80\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Navigate back to the packaged game executable")]),t._v(" "),a("li",[t._v("Run the game via the shortcut with the targets we defined earlier")]),t._v(" "),a("li",[t._v("After our game starts we should see "),a("code",[t._v("18:52:20.899 Streamer connected: ::1")]),t._v(" being printed inside our console")])]),t._v(" "),a("p",[t._v("Now we would like to play our game using another device in our home network, perhaps a mobile phone. Let's make the appropriate changes.")]),t._v(" "),a("ol",[a("li",[t._v("Open "),a("code",[t._v("ipconfig")]),t._v(" via command-prompt")]),t._v(" "),a("li",[t._v("Copy the IPv4 Address (should look something like this: "),a("code",[t._v("192.168.1.34")]),t._v(")")]),t._v(" "),a("li",[t._v("Change the "),a("code",[t._v("PixelStreamingIP=")]),t._v(" argument to the IPv4 Address")]),t._v(" "),a("li",[t._v("Run the game again")]),t._v(" "),a("li",[t._v("Open the IP-Adress on your mobile browser.")]),t._v(" "),a("li",[t._v("Follow the instructions on the screen.")])]),t._v(" "),a("p",[t._v("Voila, this should work.")]),t._v(" "),a("h3",{attrs:{id:"quality-of-life-additions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quality-of-life-additions"}},[t._v("#")]),t._v(" Quality of life additions")]),t._v(" "),a("h4",{attrs:{id:"disable-rendering-on-host-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-rendering-on-host-machine"}},[t._v("#")]),t._v(" Disable rendering on host machine")]),t._v(" "),a("ol",[a("li",[t._v("Add following flag to the executable target: "),a("code",[t._v("-RenderOffScreen")])]),t._v(" "),a("li",[t._v("Run the server script")]),t._v(" "),a("li",[t._v("Run the game via the shortcut with the targets we defined")])]),t._v(" "),a("p",[t._v("Since we won't have a windows available for us to close the game instance, we need to look for the runtime via "),a("code",[t._v("Windows Task Manager")]),t._v("\nThe task name is equivalent to the project name.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"going-worldwide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#going-worldwide"}},[t._v("#")]),t._v(" Going worldwide")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Make sure that you have a port open. "),a("code",[t._v("8080")]),t._v(" is prefereable.")])]),t._v(" "),a("li",[a("p",[t._v("Since I can't open port "),a("code",[t._v("8080")]),t._v(", I've opened port "),a("code",[t._v("7777")]),t._v(" on my router.")])]),t._v(" "),a("li",[a("p",[t._v("Run the "),a("code",[t._v("Start_AWS_WithTURN_SignallingServer.ps1")]),t._v(" script with following command-line arguments:\n"),a("code",[t._v("--PublicIp=78.54.233.255 --httpPort=7777")])])])]),t._v(" "),a("p",[t._v("You should check your personal PublicIp beforehand.\nThe Port has to be some port that is open on your router.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Run the game")]),t._v(" "),a("li",[t._v("Open the browser @ "),a("code",[t._v("78.54.233.255:7777")])]),t._v(" "),a("li",[t._v("Done")])]),t._v(" "),a("h3",{attrs:{id:"know-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#know-issue"}},[t._v("#")]),t._v(" Know Issue")]),t._v(" "),a("p",[t._v("Currently the following error occurs with this approach:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Assertion failed: PeerConnection\n[File:D:/Build/++UE4+Licensee/Sync/Engine/Plugins/Media/PixelStreaming/Source/PixelStreaming/Private/Streamer.cpp] [Line: 226]\n")])])]),a("p",[t._v("Corresponding codeblock:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("File"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Streamer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpp\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FStreamer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreatePlayerSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FPlayerId PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("203")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PeerConnectionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bPlanB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("207")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verifyf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Players"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"player %u already exists"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("208")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("209")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("210")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("211")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// With unified plan, we get several calls to OnOffer, which in turn calls")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("212")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this several times.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Therefore, we only try to create the player if not created already")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("214")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Players"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("215")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("216")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("217")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("218")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("219")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \twebrtc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("FakeConstraints Constraints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("221")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \tConstraints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOptional")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webrtc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("MediaConstraintsInterface"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("kEnableDtlsSrtp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("223")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" bOriginalQualityController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Players"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// first player controls quality by default")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("224")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \tTUniquePtr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FPlayerSession"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Session "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MakeUnique"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FPlayerSession"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bOriginalQualityController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("225")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \trtc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("scoped_refptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("webrtc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("PeerConnectionInterface"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PeerConnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PeerConnectionFactory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreatePeerConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PeerConnectionConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" webrtc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("PeerConnectionDependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("226")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PeerConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("227")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \tSession"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetPeerConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PeerConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("228")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \tPlayers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlayerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MoveTemp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("229")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("230")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"going-worldwide-via-localtunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#going-worldwide-via-localtunnel"}},[t._v("#")]),t._v(" Going worldwide via localtunnel")]),t._v(" "),a("p",[t._v("We will use the "),a("code",[t._v("localtunnel")]),t._v(" npm package to make our Pixel Streaming Server available worldwide. This way, friends can check out the stuff that you're building. Also, clients for ArchViz can access your Server with ease.")]),t._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),a("p",[t._v("Localtunnel will map a local port to a temporary online web adress.\nLet's start.")]),t._v(" "),a("ol",[a("li",[t._v("Run "),a("code",[t._v("npm i localtunnel -g")])]),t._v(" "),a("li",[t._v("Open cmd")]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("lt -p 8000")])])]),t._v(" "),a("blockquote",[a("p",[t._v("We take whatever port we are running our Pixel Streaming Server on and pass it as an argument to LocalTunnel. LocalTunnel maps whatever local server we have running on the port specified to a globally accessible web adress.")])]),t._v(" "),a("p",[t._v("After running above command you'll get something like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("your url is: https://neat-monkey-83.loca.lt\n")])])]),a("p",[t._v("Send this adress to your friend. Voila, we have successfully connected our Pixel Streaming Server to the web and made it available outside our home network. Pretty neat, right?")]),t._v(" "),a("blockquote",[a("p",[t._v("Make sure that you have your game instance and server running as well, otherwise this won't work.")])]),t._v(" "),a("h3",{attrs:{id:"if-you-used-a-custom-ip-adress-as-a-target"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-you-used-a-custom-ip-adress-as-a-target"}},[t._v("#")]),t._v(" If you used a custom IP Adress as a target")]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("lt -p 8000 -l YOUR_IP_ADRESS")]),t._v(" instead. (not tested)\nTo make sure this works without any issues, just use "),a("code",[t._v("localhost")]),t._v(" as your IP target.")]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"customizing-the-webview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-webview"}},[t._v("#")]),t._v(" Customizing the Webview")]),t._v(" "),a("p",[t._v("We'll look at things like:")]),t._v(" "),a("ul",[a("li",[t._v("disabling user input")]),t._v(" "),a("li",[t._v("Refactoring the website code into a standart React app")]),t._v(" "),a("li",[t._v("Refactoring the webUI using the very cool "),a("a",{attrs:{href:"https://github.com/playcanvas/pcui",target:"_blank",rel:"noopener noreferrer"}},[t._v("PCUI"),a("OutboundLink")],1),t._v(" library")])])])}),[],!1,null,null,null);e.default=n.exports}}]);