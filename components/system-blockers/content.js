// Content for the System Blockers and Enablers page.
// Source: System Blockers page prototype, draft 3 copy (Dark Matter Labs).
// Everything here is a working hypothesis. Each evidence item carries a
// provenance label (see EVIDENCE_LABELS) so readers can see where it came from.

export const CONTACT_EMAIL = 'beyondtherules@darkmatterlabs.org';

export const EVIDENCE_LABELS = {
  hyp: {
    label: 'Our hypothesis',
    description: 'A pattern we think we see. Not yet tested.',
  },
  int: {
    label: 'Heard in conversations',
    description: 'Came up across several practitioner conversations.',
  },
  ws: {
    label: 'From the Sheffield workshop',
    description: 'Raised by practitioners in the room in Sheffield.',
  },
  gap: {
    label: 'Gap',
    description: 'Something we don’t yet have evidence for.',
  },
};

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
    name: 'Before the start',
    shortName: 'Before it started',
    colour: '#c2c2c2',
    proposed: true,
    intro:
      'Whether there is an intention to collaborate at all, and who is eligible to be in the room. Practitioners in Sheffield told us these sit outside the five stages.',
    decisionPoints: ['Deciding to collaborate', 'Deciding who is eligible'],
    conditions: [],
    questions: [
      'Is the intention to collaborate really there, or is it required by a funder?',
      'Who decided who was eligible to be in the room?',
      'Who isn’t in the room, and who is relying on them not being there?',
    ],
    evidence: [
      [
        'ws',
        'The Sheffield room questioned the linear journey. Intentionality at inception, eligibility and who is in the room all sat outside or across the five stages.',
      ],
      [
        'hyp',
        'This stage is our reading of that challenge. Nobody has yet tested whether it is one stage or a thread running through all of them.',
      ],
      ['gap', 'No condition card has been written for this stage yet.'],
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
        'Mission and outcome language often gets fixed inside the lead organisation or funder before local actors can meaningfully contribute.',
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
        'Coordination, convening and learning get absorbed into indirect cost lines or go unfunded.',
      ],
      [
        'hyp',
        'Calls are designed around individual projects, with collaboration mentioned but not structurally supported or scored.',
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
        'Standard grant terms concentrate legal and financial exposure at the bottom of the funding chain.',
      ],
      [
        'int',
        'Risk came up in almost every conversation, usually framed as risk to the institution. There is rarely a place to record the risk of not acting.',
      ],
      [
        'ws',
        'The Sheffield room talked about how risk is held individually when it could be held collectively, and about funders walking alongside partners or transferring risk to them.',
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
      'Which part of this is binding, and which part did someone choose? That question is for your lawyer, and it is a better one to take to them.',
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
        'Grant agreements lock collaborations into milestones fixed early, because fixed plans are easier to track and audit.',
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
        'Renewal follows visible outputs and legible stories, so structural and relational progress goes unrewarded.',
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
    body: 'The six cards from the Sheffield workshop, plus a blank one.',
  },
];

export const findStage = (id) => STAGES.find((stage) => stage.id === id);

export const stageLabel = (stage) =>
  stage.proposed ? 'Stage 0 (proposed)' : `Stage ${stage.num}`;

export const mailto = (subject) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
