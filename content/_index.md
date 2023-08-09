---
title: "Home"
---

## Hi there 👋

I am an open source graphics developer and here is a list of the applications I am [currently working](https://github.com/markusmoenig) on.

My apps are mostly written in Metal / Swift for the Apple ecosystem or cross-platform via Rust.

If you want to get in contact to talk about bugs or provide feedback or ideas join my [Discord](https://discord.gg/BMStWPhByj) or send an [eMail](mailto:nubby.leaving0w@icloud.com).

I run a [Patreon](https://www.patreon.com/MarkusMoenig) in case you want to support my work, I do not do it for the money but some support is always appreciated! You can also become a [GitHub Sponsor](https://github.com/sponsors/markusmoenig).

You can follow my blog on my Patreon or the [Whats New](./whatsnew/) section on this Website.

Here are my apps.

---

## ShaderMania

![ShaderMania](./shadermania.png?classes=left)

ShaderMania is a Metal shader editor for macOS and iPadOS. It is mostly inspired by ShaderToy. It features an integrated code editor, live previews and a node system to connect shaders.

Overview
* *Development Status*: Active
* *Languages*: Metal, Swift
* *Current Version*: v1.55
* *License*: MIT
* *Website*: Not yet
* [AppStore Link](https://apps.apple.com/us/app/shadermania/id1541065830)
* [GitHub Repo](https://github.com/markusmoenig/ShaderMania)

Planned Features
* Text support using a default SDF texture
* A Lua control script which can call and share parameters with shaders, which would enable interactive presentations and small games.

---

## Render-Z

![Render-Z](./render-z.png?classes=left)

Render-Z is a visual Metal shader editor for macOS and iPadOS. Visually create Metal shaders via drag and drop. Render-Z supports workflows to create complex expressions and shaders.

You can stack shaders and developers can expose variables to artists which can manipulate them using gizmos.

Overview
* *Development Status*: Active. v1 in 2023.
* *Languages*: Metal, Swift
* *Current Version*: v0.70
* *License*: MIT
* [Website](https://render-z.com)
* [TestFlight Link](https://t.co/ZuEjgfBF1f)
* [GitHub Repo](https://github.com/markusmoenig/Render-Z)

---

## Eldiron

![Eldiron](./eldiron.png?classes=left)

Eldiron is a cross-platform creator for classic role-playing-games (RPGs). It’s main aim is to create games similar to the RPGs of the 80’s and 90’s but with modern features as well as support for single and multi-player experiences.

Overview
* *Development Status*: Active. v1 in 2023.
* *Languages*: Rust
* *Current Version*: v0.82
* *License*: MIT
* [Website](https://eldiron.com)
* [TestFlight Link](https://testflight.apple.com/join/50oZ5yds) / [Windows / Linux](https://github.com/markusmoenig/Eldiron/releases)
* [GitHub Repo](https://github.com/markusmoenig/Eldiron)
* Eldiron has its own, separate Patreon [here](https://patreon.com/eldiron)

---

## Denrim

![Denrim](./denrim.png?classes=left)

Denrim is a 2D game creator utilizing a unique text based approach for game logic and resources. It is highly optimized for the Metal GPU framework and combines ease-of-use with the highest possible performance.

Denrim utilizes a text based approach to game creation paired with instant previews and visual game state feedback. You do not need to be a developer to create games with Denrim as no scripting languages are used.

Text based behavior trees are easy-to-use yet powerful tools to create game logic and AI. They are easier to use and understand than scripting languages but are natively compiled into Swift and therefore offer the maximum in native performance. During game execution visual feedback of the state of the nodes are provided for easy debugging.

An integrated 2D physics engine provides realistic and fast physics for your game.

Overview
* *Development Status*: Active
* *Languages*: Metal, Swift
* *Current Version*: v1.06
* *License*: MIT
* *Website*: Not yet
* [AppStore Link](https://apps.apple.com/us/app/denrim/id1529774186)
* [GitHub Repo](https://github.com/markusmoenig/Denrim)

Planned Features for v2
* SwiftUI IDE
* Lua scripts which talk to custom Metal shaders
* Tiled import for maps
* 2D physics
