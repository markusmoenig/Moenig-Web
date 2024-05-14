---
title: "Home"
---

## Hi there 👋

I am an open source graphics developer and here is a list of the applications I am [currently working](https://github.com/markusmoenig) on.

My apps are mostly written in Metal / Swift for the Apple ecosystem or cross-platform via Rust.

If you want to get in contact to talk about bugs or provide feedback or ideas join my [Discord](https://discord.gg/BMStWPhByj) or send an [eMail](mailto:nubby.leaving0w@icloud.com).

You can buy me a [coffee](https://ko-fi.com/markusmoenig) or you can also become a [GitHub Sponsor](https://github.com/sponsors/markusmoenig).

You can follow me on [Twitter](https://twitter.com/MarkusMoenig) or [Mastodon](https://mastodon.social/@markusmoenig).

Here are my applications.

---

## Eldiron

![Eldiron](./eldiron.png?classes=left)

Eldiron is a cross-platform creator for classic role-playing-games (RPGs). It’s main aim is to create games similar to the RPGs of the 80’s and 90’s but with modern features as well as support for single and multi-player experiences.

Overview

- _Development Status_: Active. v1 in 2024.
- _Languages_: Rust
- _Current Version_: v0.89
- _License_: MIT
- [Website](https://eldiron.com)
- [Downloads](https://github.com/markusmoenig/Eldiron/releases)
- [GitHub Repo](https://github.com/markusmoenig/Eldiron)

---

## RPU

![RPU](./rpu.png?classes=left)

RPU is a GLSL compatible programming language for rendering procedural graphics on the CPU.

As GPU shaders can limit the complexity of what you can render, RPU aims to provide an alternative way of rendering complex, unlimited procedural graphics on the CPU, in 64-bit or 32-bit precision.

RPU strives to be compatible with GLSL which means that you can easily port your existing shaders to RPU.

Alternatively you can also use RPU as a general purpose mathematical scripting language, as it is designed to be fast and embeddable in your applications.

Overview

- _Development Status_: Active. v1 in 2024.
- _Languages_: Rust
- _Current Version_: v0.30
- _License_: MIT
- [Website](https://rpu-lang.org)
- [GitHub Repo](https://github.com/markusmoenig/RPU)

---

## ShaderMania

![ShaderMania](./shadermania.png?classes=left)

ShaderMania is a Metal shader editor for macOS and iPadOS. It is mostly inspired by ShaderToy. It features an integrated code editor, live previews and a node system to connect shaders.

Overview

- _Development Status_: Active
- _Languages_: Metal, Swift
- _Current Version_: v1.55
- _License_: MIT
- [AppStore Link](https://apps.apple.com/us/app/shadermania/id1541065830)
- [GitHub Repo](https://github.com/markusmoenig/ShaderMania)

Planned Features

- Text support using a default SDF texture
- A Lua control script which can call and share parameters with shaders, which would enable interactive presentations and small games.

---

## Render-Z

![Render-Z](./render-z.png?classes=left)

Render-Z is a visual Metal shader editor for macOS and iPadOS. Visually create Metal shaders via drag and drop. Render-Z supports workflows to create complex expressions and shaders.

You can stack shaders and developers can expose variables to artists which can manipulate them using gizmos.

Overview

- _Development Status_: Active. v1 in 2023.
- _Languages_: Metal, Swift
- _Current Version_: v0.70
- _License_: MIT
- [Documentation](./render-z/)
- [TestFlight Link](https://t.co/ZuEjgfBF1f)
- [GitHub Repo](https://github.com/markusmoenig/Render-Z)

---

## Denrim

![Denrim](./denrim.png?classes=left)

Denrim is a 2D game creator utilizing a unique text based approach for game logic and resources. It is highly optimized for the Metal GPU framework and combines ease-of-use with the highest possible performance.

Denrim utilizes a text based approach to game creation paired with instant previews and visual game state feedback. You do not need to be a developer to create games with Denrim as no scripting languages are used.

Text based behavior trees are easy-to-use yet powerful tools to create game logic and AI. They are easier to use and understand than scripting languages but are natively compiled into Swift and therefore offer the maximum in native performance. During game execution visual feedback of the state of the nodes are provided for easy debugging.

An integrated 2D physics engine provides realistic and fast physics for your game.

Overview

- _Development Status_: Inactive
- _Languages_: Metal, Swift
- _Current Version_: v1.06
- _License_: MIT
- [AppStore Link](https://apps.apple.com/us/app/denrim/id1529774186)
- [GitHub Repo](https://github.com/markusmoenig/Denrim)

Planned Features for v2

- SwiftUI IDE
- Lua scripts which talk to custom Metal shaders
- Tiled import for maps
- 2D physics

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

- _Development Status_: Active. Although I need some new inspirations and ideas.
- _Languages_: Rust
- _Current Version_: v0.2
- _License_: MIT
- [Website](https://forgedthoughts.com)
- [GitHub Repo](https://github.com/markusmoenig/ForgedThoughts)
