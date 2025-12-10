---
marp: true
theme: gaia
paginate: true
backgroundColor: #fff
---

<!-- _class: lead -->

# Understanding AI Agents

From LLMs to Claude Code

<!--
Welcome everyone! Today we're going to walk through the journey from basic language models to fully-configured AI agents. We'll start with what LLMs are, then see how they become agents, and finally look at how we configure them for team collaboration.
-->

---

# What are LLMs?

**Large Language Models** are AI systems that understand and generate human language.

### What can they do?
- Have conversations
- Write content and code
- Analyze and summarize text
- Translate between languages

### What makes them "large"?
Trained on massive amounts of text from the internet

<!--
LLMs are essentially very sophisticated pattern-matching systems. They've read billions of words and learned to predict what text should come next. This is a simplification, but it captures the essence.

Key limitation to highlight: They can only generate text. They can't actually DO anything in the real world on their own. They can tell you how to create a file, but they can't create one. This is where agents come in...
-->

---

# What are Agents?

## The Formula

# **Agent = LLM + Tools + A Job**

System built around LLMs with tools and a job.

*"A worker who can think and act"*

### Tools give agents capabilities:
- Read and write files
- Run shell commands
- Search the web
- Call APIs

<!--
This is the key insight: An agent is what happens when you give an LLM the ability to actually do things. Instead of just telling you how to create a file, an agent can create it. Instead of explaining how to search for something, it can search.

Tools are like giving the LLM hands and eyes. They can now interact with the world, not just describe it.
-->

---

# The Agentic Loop

How agents complete tasks:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [Receive Task] → [Think/Plan] → [Use Tool]           │
│                          ↑              │               │
│                          │              ↓               │
│                          │      [Observe Result]        │
│                          │              │               │
│                          │              ↓               │
│                    Not done         [Done?] ──→ Return  │
│                          │              │      Result   │
│                          └──────────────┘               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

The loop continues until the task is complete.

<!--
This is the heart of how agents work. They don't just respond once - they keep working. They think, act, observe, and repeat. This is why an agent can handle complex multi-step tasks. It's not magic - it's iteration.

When you ask an agent to "find all the bugs in this file and fix them", it will: read the file, identify issues, fix them one by one, and verify each fix worked.
-->

---

# What are Skills?

**Instructions** for how to do a specific task.

### Think of it like...
Giving someone a detailed manual before they start a job.

### How skills work:
1. Agent recognizes a relevant skill for the task
2. Reads the skill's instructions
3. Follows documented procedures
4. Uses supporting files/scripts when needed

### Examples:
PDF processing, code review checklists, deployment procedures

<!--
Skills are how we teach agents domain-specific expertise. Instead of the agent figuring everything out from scratch, we give it documented procedures to follow.

The key insight is that skills are automatically activated - the agent reads the description and decides when to use them. You don't have to tell it "use the PDF skill" - it just knows when PDFs are involved.
-->

---

# Agents vs Skills

**Analogy:**

A Chef (**agent**) can look at kitchen, decide what to cook, and improvise. They have autonomy.

A Recipe (**skill**) is just instructions on a card. It sits there until someone follows it.

---

<!-- _class: lead -->

# Configuring Claude Code

User-level vs. Project-level

<!--
Now let's talk about how we actually configure these agents in practice. Claude Code uses a two-level system that balances personal preferences with team standards.
-->

---

# .claude Configuration: Two Levels

<style scoped>
table { width: 100%; font-size: 0.85em; }
th { background: #667eea; color: white; }
</style>

| User Level `~/.claude/` | Project Level `.claude/` |
|------------------------|-------------------------|
| Your personal setup | Team collaboration |
| Personal agents, skills, commands | Shared agents, skills, commands |
| Your preferred settings | Project-specific workflows |
| Follows you across projects | Checked into git |
| Private - not shared | Everyone gets the same setup |

### The benefit:
**"Clone and go"** - new team members get the correct setup automatically

<!--
This separation is powerful. You can have your personal preferences - maybe you like verbose output, or you have a personal code review agent you've built. Those stay with you.

But when you work on a project, the team's standards and tools are automatically available. No manual setup, no "works on my machine" problems.
-->

---

# Priority & Merging

## The Golden Rule
**Project settings take priority over user settings**

### How it works:

```
┌─────────────────────┐     ┌─────────────────────┐
│   ~/.claude/        │     │   .claude/          │
│   (User Settings)   │     │  (Project Settings) │
│                     │     │                     │
│  - Your preferences │ ──→ │  - Team standards   │ ──→ Final Config
│  - Personal tools   │     │  - Project tools    │
│                     │     │  - Wins conflicts   │
└─────────────────────┘     └─────────────────────┘
```

### Settings are **additive** - you get both!
When there's a conflict, project wins.

<!--
The merging is additive by default. So if you have personal agents and the project has project agents, you get all of them. It only matters when there's a conflict - then project wins.

This lets teams enforce standards while still letting individuals have their preferences where they don't conflict.

Pro tip: If you need personal overrides for a specific project, use .claude/settings.local.json - it's git-ignored, so it stays personal but project-specific.
-->

---

<!-- _class: lead -->

# Summary

1. **LLMs** - AI that generates text
2. **Agents** - System built around LLMs with tools and a job
3. **Skills** - Pre-packaged expertise
4. **Configuration** - User + Project levels
5. **Merging** - Additive, project wins conflicts

<!--
Let's recap: LLMs generate text, agents can act, skills teach expertise, and Claude Code's two-level config system enables both personal preferences and team collaboration.

Questions?
-->
