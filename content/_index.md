---
title: "Home"
---

## Hi there 👋

I am an open source graphics developer and here is a list of the applications I am [currently working](https://github.com/markusmoenig) on.

My apps are mostly written in Metal / Swift for the Apple ecosystem or cross-platform via Rust.

If you want to get in contact to talk about bugs or provide feedback or ideas join my [Discord](https://discord.gg/BMStWPhByj) or send an [eMail](mailto:nubby.leaving0w@icloud.com).

I run a [Patreon](https://www.patreon.com/MarkusMoenig) in case you want to support my work. You can also become a [GitHub Sponsor](https://github.com/sponsors/markusmoenig).

You can follow me on [Twitter](https://twitter.com/MarkusMoenig) or [Mastodon](https://mastodon.social/@markusmoenig).

Here are my applications.

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
* [Documentation](./render-z/)
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

## metalRay

**metalRay** is a bare bones game framework for the Apple ecosystem. If you want to code games close to the Metal with a convenient API (in the tradition of frameworks like [raylib](https://raylib.com))  you will feel right at home.

You can write games in Swift and in C directly in Xcode while being able to create C style interoperable memory structures and pass them to your Metal shaders.

*metalRay* focuses right now on 2D drawing, 3D support will be integrated once 2D is stable.

## Features

* Use drawing functions, textures and shaders with an easy to use API.
* Share memory (C style structs) between Swift, C and Metal.
* System device events can be easily queried in the game update functions.
* Draw text using SDF textures.
* Support for 2D physics and Tiled are incoming.
* Games / Apps can be deployed easily to macOS, iOS and tvOS using Xcode.

## Why ?

I like to write games low level, and all the popular convenience frameworks out there (SDL2, raylib etc.) are not based on Metal but OpenGL, which makes iOS and tvOS compatibility problematic.

And being nostalgic, I also really enjoy coding in C again sometimes. Especially for implementing some of the classics. Get your hands dirty!

Being able to deploy your games easily to macOS, iOS and tvOS is a major advantage compared to the mostly limited cross-platform alternatives.

Overview
* *Development Status*: Active
* *Languages*: Swift, C, Metal
* *Current Version*: v0.1
* *License*: MIT
* *Website*: Not yet
* [GitHub Repo](https://github.com/markusmoenig/metalRay)

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

---

## ForgedThoughts

![ForgedThoughts](./forgedthoughts.png?classes=left)

ForgedThoughts is a programming language to model 3D objects. The above image was created with:

```rust
// Glass

let glass = Cone(0.6, 0.7, 0.6);
glass.rounding = 0.2;

glass.material.rgb = F3(1.0, 1.0, 1.0);
glass.material.roughness = 0.0;
glass.material.transmission = 1.0;
glass.material.ior = 1.50;

let interior = glass.copy();
interior.scale = 0.96;

// Fluid

let fluid = interior.copy();
fluid.scale -= 0.0002;
fluid.material.rgb = F3("722F37").to_linear();
fluid.material.transmission = 1.0;
fluid.material.roughness = 0.5;
fluid.material.ior = 1.3443705; // Red Wine
fluid.material.clearcoat_gloss = 1.0;
fluid.material.sheen = 1.0;
fluid.material.sheen_tint = 1.0;
fluid.max.y = 0.0;

glass -= interior;

// Top: Smooth Cut Off & Gold Rim

let box = Box();
box.material.rgb = F3("d4af37");
box.material.metallic = 1.0;
box.material.roughness = 0.2;
box.position.y = 1.5;

// Smoothly subtract the box from the glass
glass -= Smooth(box, 0.01);

// Create a groove with the gold material of the box
glass += Groove(box, 0.001, 0.07);
```

Overview
* *Development Status*: Active. Although I need some new inspirations and ideas.
* *Languages*: Rust
* *Current Version*: v0.2
* *License*: MIT
* [Website](https://forgedthoughts.com)
* [GitHub Repo](https://github.com/markusmoenig/ForgedThoughts)
