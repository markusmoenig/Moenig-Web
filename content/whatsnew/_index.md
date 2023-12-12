+++
title = "Whats New"
weight = 1
+++

![CodeGrid](./codegrid1.png?classes=left)

### Eldiron Rewrite: Visual Scripting (December 12th, 2023)

**I'm excited to share the latest update for my RPG Creator, featuring the introduction of CodeGrid, a new visual programming language.** CodeGrid seamlessly blends script and node systems, offering a user-friendly drag-and-drop interface.

*One significant challenge with the old Eldiron node system was its lack of flexibility.* While user-friendly, I had to make extensive internal modifications to Eldiron for optimal functionality.

Now, Eldiron's visual scripting UI revolutionizes how it operates. Everything, from character behavior to rendering, effects, and game systems, will be implemented in this language. This transforms Eldiron into a fully flexible sandbox environment. Users can start with default systems and code, adjusting them over time, or they can completely rewrite the system, diverging from Eldiron's standard setup.

**Key Advantages Include:**

1. **Ease of Use**: The system maintains the user-friendly nature of the previous node system, yet offers 100% programmability.
2. **Debugging**: The scripts run visually within the editor during gameplay, allowing real-time verification of every variable and function, with immediate feedback on the map. This feature promises to be incredibly effective.
3. **Speed**: Preliminary indications suggest the new system will significantly outpace the old scripting system. It generates native code compiled by the compiler (via arrays of inlined closures), a method quicker than both AST-based scripting and bytecode-based VMs. This efficiency makes it suitable for complex tasks like writing a visual effects pipeline.
4. **Flexibility**: There are no inherent limitations - Eldiron is a fully-featured sandbox.
5. **Nodes**: While nodes will still be used for certain applications, such as the rendering pipeline, they are now fully programmable with the scripting language. This allows for the use of existing material/rendering nodes or the creation of custom systems.
6. **Screens/Widgets**: Visual UI elements can be linked to visual scripting snippets, simplifying UI design for your game.

*I'll soon demonstrate how the system operates within Eldiron.*

### ShaderMania v1.55 (August 9th, 2023)

* Various fixes and cosmetics
* Ability to increase and decrease the size of the code editor font
* A new icon

### Render-Z v0.7 (August 6th, 2023)

First public beta (or rather lets say alpha) release of my visual Metal editor [Render-Z](https://render-z.com) for macOS and iOS.

