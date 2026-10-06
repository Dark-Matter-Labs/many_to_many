// Content for the System Blockers and Enablers page.
// Source: System Blockers page prototype, draft 3 copy with Georgia's edits
// of 6 Oct (Dark Matter Labs). Everything here is a working hypothesis. Each
// evidence item carries a label (see EVIDENCE_LABELS) so readers can see
// where it came from.

import { DRAFT_POINTS } from './points';

export const EVIDENCE_LABELS = {
  hyp: {
    label: 'Our hypothesis',
    description: 'A pattern we think we see, still to be tested further.',
  },
  int: {
    label: 'Heard in conversations',
    description:
      'Came up across several practitioner conversations or the Sheffield workshop.',
  },
  gap: {
    label: 'Gap in evidence',
    description: 'Something we don’t yet have evidence for.',
  },
};

// How far each condition card has been tested.
export const TESTED_LABELS = {
  iw: 'Based on research, tested in interviews and workshops',
  i: 'Based on research, tested in interviews',
  w: 'Based on research, tested in workshops',
  '': 'Based on research, to test further',
};

export const TESTED_SHORT = {
  iw: 'Tested in interviews and workshops',
  i: 'Tested in interviews',
  w: 'Tested in workshops',
  '': 'Based on research',
};

export const DEFINITION = {
  lead: 'System blockers are the cultural, legal, financial and organisational conditions that keep otherwise promising collaborations locked into inherited ways of working.',
  body: [
    'These blockers aren’t isolated problems. They are patterned constraints: they show up differently across contexts but share recognisable logics, such as risk transfer, fiduciary duty, procurement rules or legacy metrics. The same condition can be a blocker or an enabler, depending on who is experiencing it.',
    'Some genuinely bind. Many are cautious readings of rules that are less clear than they seem, held less for lack of knowledge than for lack of confidence about where the line really is.',
  ],
};

export const ARCHETYPES = [
  {
    id: 'philanthropy',
    title: 'Philanthropy-funded collaboration',
    shortTitle: 'Philanthropy-funded',
    status: 'Explored through research and conversations',
    body: 'Foundations or trusts funding a network of delivery and intermediary organisations towards a shared systems change goal. This is where our conversations, desk research and a workshop in Sheffield went deepest.',
    deep: true,
  },
  {
    id: 'public-private',
    title: 'Public-private and place-based partnerships',
    shortTitle: 'Public-private, place-based',
    status: 'Explored through desk research *',
    body: 'Local authorities, developers, anchor institutions and community organisations around a shared place or challenge.',
  },
  {
    id: 'multi-geography',
    title: 'Multi-geography collaborations',
    shortTitle: 'Multi-geography',
    status: 'Explored through desk research *',
    body: 'A funder or programme working through a coordinating consortium with action in many places, where the work depends on what travels between them.',
  },
];

export const JOURNEY_STAGE_NAMES = [
  'Framing',
  'Design',
  'Funding and roles',
  'Delivery',
  'Learning, renewal',
];

export const HOW_TO_USE = [
  {
    title: 'Start where you got stuck',
    body: 'Pick the moment in a collaboration where something made the work harder, or easier, than it should have been.',
  },
  {
    title: 'Read the condition',
    body: 'Who it blocks, who it enables, what it protects, and what others have tried.',
  },
  {
    title: 'Tell us where it’s wrong',
    body: 'Tell us what you found, what you have already tried, or what you would do.',
  },
];

export const REFLECTION_PROMPT =
  'Think of a collaboration you’ve been part of, where something structural made the work harder than it needed to be.';

export const REFLECTION_QUESTIONS = [
  {
    question: 'What was that condition protecting?',
    detail: 'Someone, somewhere in the system, was relying on it.',
  },
  {
    question: 'Have you worked around it, or changed it?',
    detail:
      'Most of us work around these conditions quietly and alone. Fewer try to shift them, and fewer still do it with others.',
  },
  {
    question: 'What risk does your organisation never write down?',
    detail:
      'A risk register lists what could go wrong if you act. Where does it record what goes wrong if you don’t?',
  },
  {
    question: 'What would make change feel possible?',
    detail:
      'If a few people wanted to change one instrument or one process, what would need to be true?',
  },
];

export const CONDITIONS = {
  mission: {
    tested: 'iw',
    name: 'Mission and outcome framing',
    moment:
      'The collaboration’s purpose gets defined. This moment sets the frame that everything else will be measured against.',
    pattern:
      'Mission and outcome language gets fixed internally by the lead organisation or funder before local actors can meaningfully contribute.',
    blocks: {
      who: 'Community organisations, local authorities, delivery partners',
      how: 'They join a collaboration whose purpose was already decided. Ownership is performed rather than real.',
    },
    enables: {
      who: 'Boards, strategy teams, programme leads',
      how: 'A stable narrative for resource approval, and a defensible scope before launch.',
    },
  },
  coordination: {
    tested: 'iw',
    name: 'Coordination and learning infrastructure',
    moment:
      'The collaboration’s infrastructure gets designed: who does what, how decisions get made, what holds it together over time.',
    pattern:
      'Coordination, convening and learning work gets absorbed into indirect cost lines or left unfunded, because overhead should be minimised and money should reach frontline delivery.',
    blocks: {
      who: 'Backbone organisations, coalitions, learning partners',
      how: 'Glue work happens invisibly. One person carries several informal roles with no budget and no recognition.',
    },
    enables: {
      who: 'Finance teams, programme leads, boards, donors',
      how: 'Overhead ratios stay low, funds are visibly directed to delivery, audit requirements are met.',
    },
  },
  call: {
    tested: 'iw',
    name: 'Call and programme design',
    moment:
      'The funder defines what they’re looking for: the call that shapes who applies, how, and what gets funded.',
    pattern:
      'Calls are designed around individual projects first, with collaboration mentioned but not structurally supported or scored.',
    blocks: {
      who: 'Coalitions, intermediaries, community organisations trying to collaborate',
      how: 'Partnership in name only: one lead with others attached, because the call rewards individual track records.',
    },
    enables: {
      who: 'Programme teams, selection panels, boards seeking comparability',
      how: 'A manageable, comparable application pool with clear scoring and a defensible selection.',
    },
  },
  risk: {
    tested: 'iw',
    name: 'Risk and liability allocation',
    moment:
      'The legal and financial structure gets agreed: who holds money, who is liable, what happens if something goes wrong.',
    pattern:
      'Standard grant terms concentrate legal and financial exposure at the bottom of the funding chain, because a single accountable entity must sit at the top and fiduciary duty must be protected.',
    blocks: {
      who: 'Small NGOs, community groups, local delivery partners',
      how: 'Exposure their insurance doesn’t cover. They take part defensively, or not at all.',
    },
    enables: {
      who: 'Boards, legal teams, finance and risk committees',
      how: 'Protects the lead organisation’s fiduciary position and gives the board a clean line of accountability.',
    },
  },
  delivery: {
    tested: 'w',
    name: 'Delivery agreements and milestone design',
    moment:
      'Mid-delivery, the collaboration is learning things that weren’t visible at the design stage. Can that change what is being done?',
    pattern:
      'Grant agreements lock collaborations into predefined milestones and outputs, because fixed plans are easier to track, defend and audit.',
    blocks: {
      who: 'Delivery organisations, public partners, communities, learning partners',
      how: 'They keep delivering work they don’t believe in, because changing course means renegotiating the grant.',
    },
    enables: {
      who: 'Programme managers, MEL teams, boards, reporting functions',
      how: 'Stable plans that can be tracked against budget, reported to the board and defended to auditors.',
    },
  },
  renewal: {
    tested: 'w',
    name: 'Renewal and continuation criteria',
    moment:
      'A decision about whether to continue, shift, scale or close. This determines what counts as progress.',
    pattern:
      'Renewal decisions are shaped by visible outputs and legible stories, because boards need defensible evidence and communications teams need narratives that travel.',
    blocks: {
      who: 'Backbone organisations, coalitions doing governance and trust-building work',
      how: 'They lose funding despite holding the collaboration together, because relational progress never appeared in a report.',
    },
    enables: {
      who: 'Trustees, senior leadership, communications and fundraising teams',
      how: 'The next funding round secured with a strong impact narrative and a board that can defend it.',
    },
  },
};

// Colours reuse the site's section palette so each stage reads as distinct.
export const STAGES = [
  {
    id: 'stage-0',
    num: '0',
    name: 'Who gets into the room *',
    shortName: 'Before it started',
    colour: '#c2c2c2',
    proposed: true,
    intro:
      '* Who is invited to discuss and frame the problem is itself a design choice, and one of the most important. Practitioners in the Sheffield workshop raised it. We haven’t gone into it in detail yet.',
    decisionPoints: ['Deciding to collaborate', 'Deciding who is invited'],
    conditions: [],
    questions: [
      'Is the intention to collaborate really there, or is it required by a funder?',
      'Who decided who was invited to frame the problem?',
      'Who isn’t in the room, and what would change if they were?',
    ],
    evidence: [
      [
        'int',
        'Practitioners in the Sheffield workshop said intention, eligibility and who is in the room sit outside or across the five stages.',
      ],
      [
        'hyp',
        'Our reading: who gets invited to frame the problem is itself a design choice.',
      ],
      ['gap', 'Nothing at this stage has been tested yet.'],
    ],
    takeaway:
      'Before asking what blocks this collaboration, ask whose collaboration it is.',
  },
  {
    id: 'stage-1',
    num: '1',
    name: 'Problem and mission framing',
    colour: '#59ff7f',
    intro:
      'The collaboration’s purpose gets defined: who it is for, what it is trying to change, and on whose terms.',
    decisionPoints: ['Mission and theory of change sign-off'],
    conditions: ['mission'],
    questions: [
      'Who shaped the mission before local actors could contribute?',
      'What would a board need in order to approve a mission that is still open?',
      'What does a clear mission protect, and for whom?',
    ],
    evidence: [
      [
        'hyp',
        'Mission and outcome language often gets fixed inside the lead organisation or funder before local actors can meaningfully contribute (workshop card).',
      ],
      [
        'int',
        'Several people described strategy being set before the people closest to the work are in the room.',
      ],
      [
        'int',
        'Some funders are giving up OKRs and fixed outcomes, and funding hypotheses and learning questions instead. What is possible depends on the country and the funder’s legal form.',
      ],
      [
        'gap',
        'No published account yet of how an open mission was approved and held over time.',
      ],
    ],
    takeaway:
      'What would it take for the mission to be something partners shape, rather than join?',
  },
  {
    id: 'stage-2',
    num: '2',
    name: 'Portfolio and collaboration design',
    colour: '#bcd5ff',
    intro:
      'Who does what, how decisions get made, what holds everything together, and what the call asks for.',
    decisionPoints: ['Call or RFP finalised', 'Budget approved'],
    conditions: ['coordination', 'call'],
    questions: [
      'Where does coordination work sit in the budget, if anywhere?',
      'Does the call score collaboration, or only mention it?',
      'Who carries the glue work, and does anyone see it?',
    ],
    evidence: [
      [
        'hyp',
        'Coordination, convening and learning get absorbed into indirect cost lines or go unfunded (workshop card).',
      ],
      [
        'hyp',
        'Calls are designed around individual projects, with collaboration mentioned but not structurally supported or scored (workshop card).',
      ],
      [
        'int',
        'Several people described relationships and coordination as the work that keeps collaborations alive, and the work least likely to be funded.',
      ],
      [
        'gap',
        'No measured figures for how much coordination work goes unfunded. The numbers on the workshop cards were illustrations.',
      ],
    ],
    takeaway:
      'If coordination is the work, what would a budget line for it have to prove?',
  },
  {
    id: 'stage-3',
    num: '3',
    name: 'Funding, roles and conditions',
    colour: '#ffc3a2',
    intro:
      'Who holds the money, who is liable, and what happens if something goes wrong.',
    decisionPoints: ['Risk and liability agreed'],
    conditions: ['risk'],
    questions: [
      'Who in this agreement carries the exposure, and did they choose to?',
      'Is this term required by law, by policy, or by habit?',
      'Where would the risk of not acting be written down?',
    ],
    evidence: [
      [
        'hyp',
        'Standard grant terms concentrate legal and financial exposure at the bottom of the funding chain (workshop card).',
      ],
      [
        'int',
        'Risk came up in almost every conversation, usually framed as risk to the institution. There is rarely a place to record the risk of not acting.',
      ],
      [
        'int',
        'In the Sheffield workshop, people talked about how risk is held individually when it could be held collectively, and about funders walking alongside partners or transferring risk to them.',
      ],
      [
        'int',
        'Some funders commission specific legal advice so their board will trust it. It can unlock things, and few can afford it one organisation at a time.',
      ],
      [
        'gap',
        'No tested examples yet of agreements that allocate risk differently.',
      ],
    ],
    takeaway:
      'Which part of this is binding, and which part did someone choose? That one is for your lawyer.',
  },
  {
    id: 'stage-4',
    num: '4',
    name: 'Delivery and coordination',
    colour: '#dfa2ff',
    intro:
      'Mid-delivery, the collaboration starts learning things that weren’t visible at the design stage.',
    decisionPoints: ['Milestones fixed'],
    conditions: ['delivery'],
    questions: [
      'What would it take to change course mid-grant?',
      'Who can say the plan is wrong, and what happens when they do?',
      'What does reporting ask for that nobody uses?',
    ],
    evidence: [
      [
        'hyp',
        'Grant agreements lock collaborations into milestones fixed early, because fixed plans are easier to track and audit (workshop card).',
      ],
      [
        'int',
        'Funders and grantees are experimenting with reporting that holds accountability alongside relational trust.',
      ],
      [
        'gap',
        'No written examples yet of adaptive milestones surviving an audit.',
      ],
    ],
    takeaway:
      'What is the plan protecting, and could it protect the same thing while changing?',
  },
  {
    id: 'stage-5',
    num: '5',
    name: 'Learning, adaptation and continuation',
    colour: '#ffe091',
    intro:
      'A decision about whether to continue, shift, scale or close, and so about what counts as progress.',
    decisionPoints: ['Renewal decision'],
    conditions: ['renewal'],
    questions: [
      'What counts as progress at renewal, and who decided?',
      'What real work never appears in a report?',
      'Does anything learned here change what gets funded next?',
    ],
    evidence: [
      [
        'hyp',
        'Renewal follows visible outputs and legible stories, so structural and relational progress goes unrewarded (workshop card).',
      ],
      [
        'hyp',
        'Learning happens but rarely changes what gets done next. This is part of our starting hunch, not something we have tested.',
      ],
      [
        'int',
        'People who work with boards described how much time goes into trustees’ confidence, much of it shaped by attribution and risk.',
      ],
      [
        'gap',
        'No renewal criteria on record yet that reward relational work.',
      ],
    ],
    takeaway:
      'If the collaboration’s most important progress is invisible, whose job is it to make it visible?',
  },
];

export const RULE_SPECTRUM = [
  { title: 'Within the rules', body: 'Done as the rules expect.' },
  {
    title: 'Between the rules',
    body: 'Where the rules are silent, and practice fills the gap.',
  },
  {
    title: 'Beyond the rules, lawful',
    body: 'New, and still within the law.',
  },
  {
    title: 'Beyond the rules, needs change',
    body: 'Would need the law, guidance or a governing document to change.',
  },
];

export const PATTERNS = [
  {
    title: 'Funding hypotheses instead of fixed outcomes',
    body: 'Some funders are giving up OKRs and fixed outcomes, and funding hypotheses and learning questions instead. What is possible depends on the country and on the funder’s legal form.',
    stages: ['stage-1', 'stage-5'],
  },
  {
    title: 'Agreeing in principle, designing later',
    body: 'A board agrees in principle that certain funds will be held for a broader purpose. The detailed arrangements come back for discussion and reflection, not re-approval. Whether that distinction holds over time is still being tested.',
    stages: ['stage-1', 'stage-3'],
  },
  {
    title: 'Supporting trustees’ confidence',
    body: 'People who work with boards described how much time goes into supporting trustees’ thinking and confidence, much of it shaped by questions of attribution and risk.',
    stages: ['stage-3', 'stage-5'],
  },
  {
    title: 'Commissioning legal advice the board will trust',
    body: 'Funders commission specific legal advice, sometimes at great cost and from firms chosen for their reputation. It can unlock things. Few can afford to keep doing it, one organisation at a time.',
    stages: ['stage-3'],
  },
  {
    title: 'Reporting differently',
    body: 'Funders and the organisations they fund are experimenting with ways of reporting that hold accountability alongside relational trust, rather than through bureaucracy that undermines the work.',
    stages: ['stage-4', 'stage-5'],
  },
];

export const TOOLS = [
  {
    title: 'Journey map canvas',
    body: 'The five stages, blank, to map your own collaboration.',
  },
  {
    title: 'Working canvas',
    body: 'For one condition: who it blocks, who it enables, and what it protects.',
  },
  {
    title: 'Decision cards',
    body: 'The cards from the Sheffield workshop, and a blank one.',
  },
];

export const findStage = (id) => STAGES.find((stage) => stage.id === id);

export const stageLabel = (stage) => `Stage ${stage.num}`;

// The Sheffield workshop cards come first and are drawn larger on the stage
// line; the draft cards from desk research follow.
export const stagePoints = (stage) => [
  ...stage.conditions.map((key) => ({
    ...CONDITIONS[key],
    id: key,
    workshop: true,
  })),
  ...(DRAFT_POINTS[stage.id] || []).map((point, index) => ({
    ...point,
    id: `${stage.id}-${index}`,
    workshop: false,
  })),
];
