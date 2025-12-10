const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'Understanding AI Agents';
pptx.author = 'Claude Code Presentation';

// Color scheme (Gaia-inspired)
const colors = {
  primary: '667eea',
  secondary: '764ba2',
  dark: '1a1a2e',
  light: 'ffffff',
  accent: '4facfe'
};

// Slide 1: Title
let slide1 = pptx.addSlide();
slide1.addText('Understanding AI Agents', {
  x: 0.5, y: 2, w: '90%', h: 1.5,
  fontSize: 44, bold: true, color: colors.dark,
  align: 'center'
});
slide1.addText('From LLMs to Claude Code', {
  x: 0.5, y: 3.5, w: '90%', h: 0.75,
  fontSize: 24, color: '666666',
  align: 'center'
});
slide1.addNotes('Welcome everyone! Today we\'re going to walk through the journey from basic language models to fully-configured AI agents. We\'ll start with what LLMs are, then see how they become agents, and finally look at how we configure them for team collaboration.');

// Slide 2: What are LLMs?
let slide2 = pptx.addSlide();
slide2.addText('What are LLMs?', {
  x: 0.5, y: 0.3, w: '90%', h: 1,
  fontSize: 36, bold: true, color: colors.dark
});
slide2.addText('Large Language Models are AI systems that understand and generate human language.', {
  x: 0.5, y: 1.3, w: '90%', h: 0.8,
  fontSize: 20, color: '333333', italic: true
});
slide2.addText('What can they do?', {
  x: 0.5, y: 2.2, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide2.addText([
  { text: '• Have conversations\n', options: { bullet: false } },
  { text: '• Write content and code\n', options: { bullet: false } },
  { text: '• Analyze and summarize text\n', options: { bullet: false } },
  { text: '• Translate between languages', options: { bullet: false } }
], {
  x: 0.7, y: 2.7, w: '85%', h: 1.5,
  fontSize: 18, color: '444444'
});
slide2.addText('What makes them "large"?', {
  x: 0.5, y: 4.3, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide2.addText('Trained on massive amounts of text from the internet', {
  x: 0.7, y: 4.8, w: '85%', h: 0.5,
  fontSize: 18, color: '444444'
});
slide2.addNotes('LLMs are essentially very sophisticated pattern-matching systems. They\'ve read billions of words and learned to predict what text should come next.\n\nKey limitation to highlight: They can only generate text. They can\'t actually DO anything in the real world on their own. They can tell you how to create a file, but they can\'t create one. This is where agents come in...');

// Slide 3: What are Agents? (Formula)
let slide3 = pptx.addSlide();
slide3.addText('What are Agents?', {
  x: 0.5, y: 0.3, w: '90%', h: 1,
  fontSize: 36, bold: true, color: colors.dark
});
slide3.addText('The Formula', {
  x: 0.5, y: 1.2, w: '90%', h: 0.5,
  fontSize: 22, color: '666666'
});
slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1.5, y: 1.8, w: 7, h: 1.2,
  fill: { color: colors.primary },
  line: { color: colors.primary }
});
slide3.addText('Agent = LLM + Tools + A Job', {
  x: 1.5, y: 1.8, w: 7, h: 1.2,
  fontSize: 32, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});
slide3.addText('System built around LLMs with tools and a job', {
  x: 0.5, y: 2.8, w: '90%', h: 0.5,
  fontSize: 20, color: '666666'
});
slide3.addText('"A worker who can think and act"', {
  x: 0.5, y: 3.3, w: '90%', h: 0.5,
  fontSize: 16, color: '666666', italic: true
});
slide3.addText('Tools give agents capabilities:', {
  x: 0.5, y: 3.9, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide3.addText([
  { text: '• Read and write files\n', options: { bullet: false } },
  { text: '• Run shell commands\n', options: { bullet: false } },
  { text: '• Search the web\n', options: { bullet: false } },
  { text: '• Call APIs', options: { bullet: false } }
], {
  x: 0.7, y: 4.4, w: '85%', h: 1.3,
  fontSize: 18, color: '444444'
});
slide3.addNotes('This is the key insight: An agent is what happens when you give an LLM the ability to actually do things. Instead of just telling you how to create a file, an agent can create it. Instead of explaining how to search for something, it can search.\n\nTools are like giving the LLM hands and eyes. They can now interact with the world, not just describe it.');

// Slide 4: The Agentic Loop
let slide4 = pptx.addSlide();
slide4.addText('The Agentic Loop', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, bold: true, color: colors.dark
});
slide4.addText('How agents complete tasks:', {
  x: 0.5, y: 1.0, w: '90%', h: 0.5,
  fontSize: 20, color: '666666'
});

// Draw the loop diagram with boxes
const boxY = 2.0;
const boxH = 0.7;
const boxW = 2.0;

// Receive Task box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: boxY, w: boxW, h: boxH,
  fill: { color: colors.primary }
});
slide4.addText('Receive Task', {
  x: 0.5, y: boxY, w: boxW, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Think/Plan box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 3.0, y: boxY, w: boxW, h: boxH,
  fill: { color: colors.secondary }
});
slide4.addText('Think/Plan', {
  x: 3.0, y: boxY, w: boxW, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Use Tool box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.5, y: boxY, w: boxW, h: boxH,
  fill: { color: 'e74c3c' }
});
slide4.addText('Use Tool', {
  x: 5.5, y: boxY, w: boxW, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Observe Result box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.5, y: boxY + 1.2, w: boxW, h: boxH,
  fill: { color: 'f39c12' }
});
slide4.addText('Observe Result', {
  x: 5.5, y: boxY + 1.2, w: boxW, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Done? box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 3.0, y: boxY + 1.2, w: boxW, h: boxH,
  fill: { color: '27ae60' }
});
slide4.addText('Done?', {
  x: 3.0, y: boxY + 1.2, w: boxW, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Return Result box
slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 8.0, y: boxY + 1.2, w: 1.5, h: boxH,
  fill: { color: '2ecc71' }
});
slide4.addText('Return', {
  x: 8.0, y: boxY + 1.2, w: 1.5, h: boxH,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

// Arrows as text
slide4.addText('→', { x: 2.5, y: boxY, w: 0.5, h: boxH, fontSize: 24, align: 'center', valign: 'middle', color: '333333' });
slide4.addText('→', { x: 5.0, y: boxY, w: 0.5, h: boxH, fontSize: 24, align: 'center', valign: 'middle', color: '333333' });
slide4.addText('↓', { x: 6.25, y: boxY + 0.7, w: 0.5, h: 0.5, fontSize: 24, align: 'center', valign: 'middle', color: '333333' });
slide4.addText('←', { x: 5.0, y: boxY + 1.2, w: 0.5, h: boxH, fontSize: 24, align: 'center', valign: 'middle', color: '333333' });
slide4.addText('Yes →', { x: 7.3, y: boxY + 1.2, w: 0.7, h: boxH, fontSize: 14, align: 'center', valign: 'middle', color: '333333' });

// Loop back arrow text
slide4.addText('↑ No, keep going', {
  x: 1.5, y: boxY + 1.2, w: 1.5, h: boxH,
  fontSize: 12, color: '666666', align: 'center', valign: 'middle'
});

slide4.addText('The loop continues until the task is complete.', {
  x: 0.5, y: 4.5, w: '90%', h: 0.5,
  fontSize: 18, bold: true, color: colors.primary,
  align: 'center'
});
slide4.addNotes('This is the heart of how agents work. They don\'t just respond once - they keep working. They think, act, observe, and repeat. This is why an agent can handle complex multi-step tasks. It\'s not magic - it\'s iteration.\n\nWhen you ask an agent to "find all the bugs in this file and fix them", it will: read the file, identify issues, fix them one by one, and verify each fix worked.');

// Slide 5: What are Skills?
let slide5 = pptx.addSlide();
slide5.addText('What are Skills?', {
  x: 0.5, y: 0.3, w: '90%', h: 1,
  fontSize: 36, bold: true, color: colors.dark
});
slide5.addText('Instructions for how to do a specific task.', {
  x: 0.5, y: 1.2, w: '90%', h: 0.7,
  fontSize: 20, color: '333333', italic: true
});
slide5.addText('Think of it like...', {
  x: 0.5, y: 2.0, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide5.addText('Giving someone a detailed manual before they start a job.', {
  x: 0.7, y: 2.5, w: '85%', h: 0.5,
  fontSize: 18, color: '444444'
});
slide5.addText('How skills work:', {
  x: 0.5, y: 3.2, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide5.addText([
  { text: '1. Agent recognizes a relevant skill for the task\n', options: { bullet: false } },
  { text: '2. Reads the skill\'s instructions\n', options: { bullet: false } },
  { text: '3. Follows documented procedures\n', options: { bullet: false } },
  { text: '4. Uses supporting files/scripts when needed', options: { bullet: false } }
], {
  x: 0.7, y: 3.7, w: '85%', h: 1.3,
  fontSize: 18, color: '444444'
});
slide5.addText('Examples: PDF processing, code review checklists, deployment procedures', {
  x: 0.5, y: 5.1, w: '90%', h: 0.4,
  fontSize: 16, color: '666666', italic: true
});
slide5.addNotes('Skills are how we teach agents domain-specific expertise. Instead of the agent figuring everything out from scratch, we give it documented procedures to follow.\n\nThe key insight is that skills are automatically activated - the agent reads the description and decides when to use them. You don\'t have to tell it "use the PDF skill" - it just knows when PDFs are involved.');

// Slide 6: Agents vs Skills Analogy
let slide6 = pptx.addSlide();
slide6.addText('Agents vs Skills', {
  x: 0.5, y: 0.3, w: '90%', h: 1,
  fontSize: 36, bold: true, color: colors.dark
});
slide6.addText('Analogy:', {
  x: 0.5, y: 1.3, w: '90%', h: 0.5,
  fontSize: 22, bold: true, color: colors.primary
});
slide6.addText([
  { text: 'A Chef (', options: { color: '444444' } },
  { text: 'agent', options: { color: 'e74c3c' } },
  { text: ') can look at kitchen, decide what to cook, and improvise. They have autonomy.', options: { color: '444444' } }
], {
  x: 0.5, y: 2.0, w: '90%', h: 0.8,
  fontSize: 18
});
slide6.addText([
  { text: 'A Recipe (', options: { color: '444444' } },
  { text: 'skill', options: { color: colors.primary } },
  { text: ') is just instructions on a card. It sits there until someone follows it.', options: { color: '444444' } }
], {
  x: 0.5, y: 3.0, w: '90%', h: 0.8,
  fontSize: 18
});

// Slide 7: Section break - Configuring Claude Code
let slide7 = pptx.addSlide();
slide7.addText('Configuring Claude Code', {
  x: 0.5, y: 2.2, w: '90%', h: 1.2,
  fontSize: 44, bold: true, color: colors.dark,
  align: 'center'
});
slide7.addText('User-level vs. Project-level', {
  x: 0.5, y: 3.4, w: '90%', h: 0.75,
  fontSize: 24, color: '666666',
  align: 'center'
});
slide7.addNotes('Now let\'s talk about how we actually configure these agents in practice. Claude Code uses a two-level system that balances personal preferences with team standards.');

// Slide 8: Two Levels of Configuration
let slide8 = pptx.addSlide();
slide8.addText('.claude Configuration: Two Levels', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 32, bold: true, color: colors.dark
});

// User Level column
slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 0.6,
  fill: { color: colors.primary }
});
slide8.addText('User Level ~/.claude/', {
  x: 0.5, y: 1.2, w: 4.3, h: 0.6,
  fontSize: 18, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});
slide8.addText([
  { text: '• Your personal setup\n', options: { bullet: false } },
  { text: '• Personal agents, skills, commands\n', options: { bullet: false } },
  { text: '• Your preferred settings\n', options: { bullet: false } },
  { text: '• Follows you across projects\n', options: { bullet: false } },
  { text: '• Private - not shared', options: { bullet: false } }
], {
  x: 0.6, y: 1.9, w: 4.1, h: 2,
  fontSize: 16, color: '444444'
});

// Project Level column
slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 0.6,
  fill: { color: colors.secondary }
});
slide8.addText('Project Level .claude/', {
  x: 5.2, y: 1.2, w: 4.3, h: 0.6,
  fontSize: 18, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});
slide8.addText([
  { text: '• Team collaboration\n', options: { bullet: false } },
  { text: '• Shared agents, skills, commands\n', options: { bullet: false } },
  { text: '• Project-specific workflows\n', options: { bullet: false } },
  { text: '• Checked into git\n', options: { bullet: false } },
  { text: '• Everyone gets same setup', options: { bullet: false } }
], {
  x: 5.3, y: 1.9, w: 4.1, h: 2,
  fontSize: 16, color: '444444'
});

slide8.addText('The benefit:', {
  x: 0.5, y: 4.2, w: '90%', h: 0.5,
  fontSize: 20, bold: true, color: colors.primary
});
slide8.addText('"Clone and go" - new team members get the correct setup automatically', {
  x: 0.5, y: 4.7, w: '90%', h: 0.5,
  fontSize: 18, color: '333333'
});
slide8.addNotes('This separation is powerful. You can have your personal preferences - maybe you like verbose output, or you have a personal code review agent you\'ve built. Those stay with you.\n\nBut when you work on a project, the team\'s standards and tools are automatically available. No manual setup, no "works on my machine" problems.');

// Slide 9: Priority & Merging
let slide9 = pptx.addSlide();
slide9.addText('Priority & Merging', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, bold: true, color: colors.dark
});
slide9.addText('The Golden Rule', {
  x: 0.5, y: 1.0, w: '90%', h: 0.5,
  fontSize: 20, color: '666666'
});
slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 1.5, w: 8, h: 0.8,
  fill: { color: 'e74c3c' }
});
slide9.addText('Project settings take priority over user settings', {
  x: 1, y: 1.5, w: 8, h: 0.8,
  fontSize: 22, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

slide9.addText('How it works:', {
  x: 0.5, y: 2.5, w: '90%', h: 0.5,
  fontSize: 20, bold: true, color: colors.primary
});

// User settings box
slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 3.1, w: 3, h: 1.3,
  fill: { color: 'f0f0f0' },
  line: { color: colors.primary, width: 2 }
});
slide9.addText('~/.claude/\n(User Settings)', {
  x: 0.5, y: 3.1, w: 3, h: 0.6,
  fontSize: 14, bold: true, color: colors.primary,
  align: 'center'
});
slide9.addText('Your preferences\nPersonal tools', {
  x: 0.5, y: 3.7, w: 3, h: 0.7,
  fontSize: 12, color: '666666',
  align: 'center'
});

// Arrow
slide9.addText('→', { x: 3.6, y: 3.4, w: 0.6, h: 1, fontSize: 32, align: 'center', valign: 'middle', color: '333333' });

// Project settings box
slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 4.3, y: 3.1, w: 3, h: 1.3,
  fill: { color: 'f0f0f0' },
  line: { color: colors.secondary, width: 2 }
});
slide9.addText('.claude/\n(Project Settings)', {
  x: 4.3, y: 3.1, w: 3, h: 0.6,
  fontSize: 14, bold: true, color: colors.secondary,
  align: 'center'
});
slide9.addText('Team standards\nProject tools\nWins conflicts', {
  x: 4.3, y: 3.65, w: 3, h: 0.75,
  fontSize: 12, color: '666666',
  align: 'center'
});

// Arrow
slide9.addText('→', { x: 7.4, y: 3.4, w: 0.6, h: 1, fontSize: 32, align: 'center', valign: 'middle', color: '333333' });

// Final config box
slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 8.1, y: 3.1, w: 1.6, h: 1.3,
  fill: { color: '27ae60' }
});
slide9.addText('Final\nConfig', {
  x: 8.1, y: 3.1, w: 1.6, h: 1.3,
  fontSize: 14, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});

slide9.addText('Settings are additive - you get both!', {
  x: 0.5, y: 4.6, w: '90%', h: 0.4,
  fontSize: 18, bold: true, color: colors.primary
});
slide9.addText('When there\'s a conflict, project wins.', {
  x: 0.5, y: 5.0, w: '90%', h: 0.4,
  fontSize: 16, color: '444444'
});
slide9.addNotes('The merging is additive by default. So if you have personal agents and the project has project agents, you get all of them. It only matters when there\'s a conflict - then project wins.\n\nThis lets teams enforce standards while still letting individuals have their preferences where they don\'t conflict.\n\nPro tip: If you need personal overrides for a specific project, use .claude/settings.local.json - it\'s git-ignored, so it stays personal but project-specific.');

// Slide 10: Summary
let slide10 = pptx.addSlide();
slide10.addText('Summary', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, bold: true, color: colors.dark
});

const summaryItems = [
  { num: '1', title: 'LLMs', desc: 'AI that generates text' },
  { num: '2', title: 'Agents', desc: 'System built around LLMs with tools and a job' },
  { num: '3', title: 'Skills', desc: 'Pre-packaged expertise' },
  { num: '4', title: 'Configuration', desc: 'User + Project levels' },
  { num: '5', title: 'Merging', desc: 'Additive, project wins conflicts' }
];

summaryItems.forEach((item, i) => {
  const y = 1.3 + (i * 0.9);
  slide10.addShape(pptx.shapes.OVAL, {
    x: 0.5, y: y, w: 0.6, h: 0.6,
    fill: { color: colors.primary }
  });
  slide10.addText(item.num, {
    x: 0.5, y: y, w: 0.6, h: 0.6,
    fontSize: 18, bold: true, color: colors.light,
    align: 'center', valign: 'middle'
  });
  slide10.addText(item.title, {
    x: 1.3, y: y, w: 2.5, h: 0.6,
    fontSize: 20, bold: true, color: colors.dark,
    valign: 'middle'
  });
  slide10.addText('- ' + item.desc, {
    x: 3.8, y: y, w: 5.5, h: 0.6,
    fontSize: 18, color: '666666',
    valign: 'middle'
  });
});

slide10.addNotes('Let\'s recap: LLMs generate text, agents can act, skills teach expertise, and Claude Code\'s two-level config system enables both personal preferences and team collaboration.\n\nQuestions?');

// Save the file
pptx.writeFile({ fileName: 'presentation.pptx' })
  .then(() => console.log('Created presentation.pptx'))
  .catch(err => console.error(err));
