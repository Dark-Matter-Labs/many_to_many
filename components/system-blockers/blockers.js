// The rules and readings that sit behind the patterns on this page.
//
// Source: System Blockers page prototype v18 (Georgia, 9 Nov 2026), built from
// the blocker taxonomy (DB1), the System Blockers spreadsheet (May 2026), the
// legal questions dossier, the Legal Lab notes and the upstream shortlist.
//
// "kind" and "status" are proposals, not settled. "shift" is our first guess
// and a lawyer should check it: placing a blocker on that scale is a legal
// judgement. "now" is filled only where a source actually holds a workaround.

import { STAGES, stagePoints } from './content';

// The five infrastructure elements of the Many-to-Many Field Guide.
export const INFRASTRUCTURE_ELEMENTS = [
  'Ecosystem strategy',
  'Governing system',
  'Organising system',
  'Legal architecture',
  'Learning system',
];

export const ARCHETYPE_NAMES = {
  phil: 'Philanthropy-funded',
  ppp: 'Public-private, place-based',
  multi: 'Multi-geography',
};

export const ELEMENT_OF = {
  'Who is in the room': 'Ecosystem strategy',
  'How fiduciary duty is read': 'Governing system',
  'Who can take part in governing': 'Governing system',
  'Mission and outcome framing': 'Ecosystem strategy',
  'Funders’ goals don’t line up': 'Ecosystem strategy',
  'Whose name is on it': 'Ecosystem strategy',
  'Coordination and learning infrastructure': 'Organising system',
  'Call and programme design': 'Ecosystem strategy',
  'One lead, or many-to-many?': 'Legal architecture',
  'Who decides': 'Governing system',
  'Many pots, one collaboration': 'Organising system',
  'Risk and liability allocation': 'Legal architecture',
  'More checks than the law asks': 'Legal architecture',
  'Someone has to hold the money': 'Legal architecture',
  'Money that can’t be spent': 'Ecosystem strategy',
  'Paying people for what they know': 'Organising system',
  'Delivery agreements and milestone design': 'Legal architecture',
  'Every funder wants a different report': 'Learning system',
  'When the coordinator leaves': 'Organising system',
  'Not safe to say it’s going wrong': 'Learning system',
  'The risk register is kept for the funder': 'Governing system',
  'Renewal and continuation criteria': 'Learning system',
  'Learning that changes nothing': 'Learning system',
  'New over what works': 'Ecosystem strategy',
  'The funder leaves': 'Ecosystem strategy',
  'Afraid of being blamed': 'Governing system',
};

export const BLOCKERS = {
  trustee: {
    name: 'How trustee duties are read',
    kind: 'Mainly the reading',
    status: 'Priority',
    short:
      'The duties trustees hold, and the cautious way they are often read, above all the fear of personal liability.',
  },
  regulator: {
    name: 'What the regulator actually requires',
    kind: 'Practice said to be regulation',
    status: 'Priority',
    short:
      'Due diligence, reporting and checks that funders say regulation requires. Can funders rely on each other’s checks?',
  },
  unincorp: {
    name: 'Funding groups without a legal form',
    kind: 'Practice said to be regulation',
    status: 'Priority',
    short:
      'Processes said to be driven by regulation that keep money from groups without a legal form, so the work runs through hosts.',
  },
  lawyers: {
    name: 'Who the lawyer works for',
    kind: 'Professional standard',
    status: 'Priority',
    short:
      'A solicitor’s duty runs to one client. In a collaboration with several parties, advice serves one of them, and conflicts of interest make shared advice hard.',
  },
  advicebuy: {
    name: 'How legal advice is bought',
    kind: 'Practice and market',
    status: 'Priority',
    short:
      'Advice is bought one organisation at a time, at a cost few can bear. It tends to default to the most cautious reading, and counsel is often chosen so that the board will trust it.',
  },
  privilege: {
    name: 'Privilege when advice is shared',
    kind: 'Law',
    status: 'To place',
    short:
      'Legal advice is generally protected by privilege. Sharing it across partners, or publishing it for others to use, could lose that protection. This is one reason good advice stays in one organisation.',
  },
  reserved: {
    name: 'Who may give legal advice',
    kind: 'Regulation',
    status: 'To place',
    short:
      'What a body that is not a regulated law firm may lawfully provide. It shapes shared tools, a Legal Lab, and this page and its wiki.',
  },
  paid: {
    name: 'Who can be paid to take part',
    kind: 'Law, with routes',
    status: 'Contender',
    short:
      'The rules on paying trustees and panel members, and benefits, tax and employment rules when people with lived experience are paid.',
  },
  delegate: {
    name: 'What trustees can delegate',
    kind: 'Law, and how it is read',
    status: 'To place',
    short:
      'Whether grant decisions can sit with a panel that includes people who are not trustees, and what must stay with the board.',
  },
  liability: {
    name: 'Who is liable to whom',
    kind: 'Contract, within the law',
    status: 'Live contexts, with a bridge back',
    short:
      'In a many-to-many, can liability be shared or capped among partners rather than held by one lead? What does a fiscal host take on? Can people steward funds without carrying liability for them?',
  },
  insurance: {
    name: 'Indemnities, clawback and insurance',
    kind: 'Contract and market',
    status: 'Live contexts',
    short:
      'Funder-friendly indemnities and clawback passed down the chain, and director and officer insurance that shapes what boards will sign.',
  },
  vat: {
    name: 'VAT on money moving within a collaboration',
    kind: 'Law (tax)',
    status: 'Priority',
    short:
      'When grant conditions make a grant a payment for services. Money moving between parties in a many-to-many may count as a supply.',
  },
  charity: {
    name: 'What a charity may be and do',
    kind: 'Law and guidance',
    status: 'Provocation',
    short:
      'Where the line on political activity sits for a collaboration whose purpose needs policy change, and who gets to define public benefit. Among the constraints most likely to bind hard.',
  },
  endow: {
    name: 'How investment duties are read',
    kind: 'Law, and how it is read',
    status: 'Watch',
    short:
      'What a foundation may do with endowment: release, total return, social investment. The duty to grow it, and the fund management model around it.',
  },
  accounting: {
    name: 'Value counted only in money',
    kind: 'Professional standard',
    status: 'Park',
    short:
      'Accounting standards that record only financial value, so relational and structural progress has nowhere to show.',
  },
  crossborder: {
    name: 'Holding and moving assets across borders',
    kind: 'Law',
    status: 'Other archetype',
    short:
      'Restrictions on holding or moving charitable assets abroad, transfer pricing, international payroll and employment status.',
  },
  directors: {
    name: 'Directors’ duties to shareholders',
    kind: 'Law, and how it is read',
    status: 'Other archetype',
    short:
      'What boards and investors will accept, and how far directors’ duties leave room for public-interest aims.',
  },
  procurement: {
    name: 'Public procurement rules',
    kind: 'Law, and how it is read',
    status: 'Other archetype',
    short:
      'Procurement, competition and conflict-of-interest rules that push partnerships into buyer and supplier shapes.',
  },
  data: {
    name: 'Data protection, competition and confidentiality',
    kind: 'Law, and how it is read',
    status: 'Other archetype',
    short:
      'Rules, and cautious readings of them, that keep useful data behind commercial walls.',
  },
  ip: {
    name: 'Intellectual property defaults',
    kind: 'Law and contract',
    status: 'Live contexts',
    short:
      'IP law and contract terms that default ownership to the party that paid.',
  },
  publicacc: {
    name: 'Public accountability for failure',
    kind: 'Law and politics',
    status: 'Other archetype',
    short:
      'Public bodies stay accountable, legally and politically, when a partnership fails, even where private partners drove the decisions.',
  },
  audit: {
    name: 'What audit and board oversight expect',
    kind: 'Practice, and professional standard',
    status: 'To place',
    short:
      'Expectations from audit and board oversight that favour fixed plans, attributable results and one accountable entity.',
  },
};

export const SHIFT_LABELS = {
  workaround: 'Work around it now',
  reading: 'Shift how it’s read',
  rule: 'Needs the rule to change',
};

// shift: our first guess, for a lawyer to check.
// now: a workaround people use today, only where a source holds one.
// binds: where a constraint genuinely binds hard, so the page doesn't suggest
// everything can be designed away.
export const AGENCY = {
  trustee: {
    shift: ['workaround', 'reading'],
    now: 'Show the board, duty by duty, how the arrangement meets each duty, and ask it to approve the approach once. Record the risk of not acting.',
    binds:
      'Trustees’ legal responsibility stays with them, even when decisions are meant to move to people on the ground.',
  },
  regulator: {
    shift: ['reading'],
    now: 'Separate what is law, what is guidance and what is the funder’s own policy. Some funders have pooled one application and one shared report.',
  },
  unincorp: {
    shift: ['workaround', 'reading'],
    now: 'A fiscal host holds the money and the risk.',
  },
  lawyers: {
    shift: ['workaround'],
    now: 'A collaborative solicitor engagement letter.',
  },
  advicebuy: {
    shift: ['workaround', 'reading'],
    now: 'Counsel the board already trusts. Advice shared with others, where privilege allows.',
  },
  privilege: { shift: ['workaround'], now: '' },
  reserved: {
    shift: ['workaround'],
    now: 'Shared tools that show what others have done, rather than advice on one case.',
  },
  paid: {
    shift: ['workaround'],
    now: 'A route may exist, through the governing document or the regulator. To check.',
  },
  delegate: { shift: ['reading'], now: '' },
  liability: {
    shift: ['workaround'],
    now: 'Share or cap liability among partners in the agreement. Replace a broad clawback with a narrow indemnity and a named mediator.',
  },
  insurance: {
    shift: ['workaround'],
    now: 'A narrow indemnity and a named mediator, in place of a broad clawback.',
  },
  vat: { shift: ['reading', 'rule'], now: '' },
  charity: {
    shift: ['rule'],
    now: '',
    binds:
      'What counts as political activity was described in our conversations as increasingly used against organisations.',
  },
  endow: {
    shift: ['reading'],
    now: 'Routes to check: release, total return, social investment.',
  },
  accounting: { shift: ['rule'], now: '' },
  crossborder: {
    shift: ['rule'],
    now: '',
    binds:
      'Limits on holding charitable assets across borders bind. One organisation named political exposure in another country as a bigger constraint than charity law.',
  },
  directors: {
    shift: ['reading'],
    now: 'Mission statements that balance commercial viability with public-interest goals, shaped with public and civic actors.',
  },
  procurement: {
    shift: ['reading'],
    now: 'Innovation partnership or pre-commercial routes, where the rules allow joint design.',
  },
  data: {
    shift: ['workaround'],
    now: 'Data-sharing agreements for safe, aggregated data flows.',
  },
  ip: {
    shift: ['workaround'],
    now: 'Non-exclusive licences, or shared or mission-bound IP.',
  },
  publicacc: {
    shift: ['workaround'],
    now: 'Proportional liability caps, shared contingency funds and clearer joint decision-making.',
  },
  audit: { shift: ['reading'], now: '' },
};

// Which underlying blockers sit behind each pattern on the page.
export const BLOCKER_OF = {
  'Who is in the room': ['unincorp', 'regulator'],
  'How fiduciary duty is read': ['trustee', 'advicebuy'],
  'Who can take part in governing': ['paid', 'delegate'],
  'Mission and outcome framing': ['trustee', 'charity'],
  'Coordination and learning infrastructure': ['accounting'],
  'One lead, or many-to-many?': [
    'liability',
    'trustee',
    'vat',
    'lawyers',
    'audit',
  ],
  'Who decides': ['delegate', 'trustee'],
  'Risk and liability allocation': [
    'trustee',
    'liability',
    'insurance',
    'lawyers',
    'advicebuy',
  ],
  'More checks than the law asks': ['regulator', 'advicebuy'],
  'Someone has to hold the money': ['unincorp', 'liability'],
  'Money that can’t be spent': ['endow'],
  'Paying people for what they know': ['paid'],
  'Every funder wants a different report': ['regulator'],
  'The risk register is kept for the funder': ['trustee'],
  'Renewal and continuation criteria': ['accounting'],
  'Delivery agreements and milestone design': ['audit'],
  'Afraid of being blamed': ['trustee'],
};

// Tools pinned to the pattern they were made for.
export const TOOL_FOR = {
  'Risk and liability allocation':
    'Charting risk flows (Field Guide), and an alternative risk register (in development)',
  'The risk register is kept for the funder':
    'An alternative risk register (in development)',
  'One lead, or many-to-many?': 'Many-to-Many Agreement (Field Guide example)',
  'Who decides': 'Role cards for flexible governance (Field Guide)',
};

// Entries worked end to end in the five-part model: the rule, how it is read,
// the practice built around it, our read, and responses at three levels.
export const WORKED_ENTRIES = {
  'Risk and liability allocation': {
    blocker: 'trustee',
    rule: 'Trustees must use the charity’s assets only for its purposes, act reasonably and prudently, safeguard its assets, act in its best interests, and act lawfully.',
    ruleSrc:
      'As set out in a legal view prepared for one foundation’s trustees (2024).',
    reading:
      'The duties are often read as a duty to avoid risk, and above all to avoid personal liability. So exposure is passed down the chain to the party least able to carry it. The same legal view reads it differently: risk “is not necessarily to be avoided”, and trustees weigh the risks of entering an arrangement against the risks of not entering it. It calls personal liability “extremely rare”.',
    practice:
      'Master grant templates, indemnity and clawback clauses, insurance requirements and sub-granting terms. Advice is usually commissioned by the funder alone, and leans to the most cautious reading.',
    ourRead:
      'Mainly the reading and the practice, not the rule. That is our working view, and a lawyer should check it.',
    levels: [
      [
        'A workaround, now',
        'Negotiate the terms. Replace a broad clawback with a narrow indemnity and a named mediator. Share risk by each party’s capacity to carry it. Chart where risk sits before anyone signs.',
      ],
      [
        'Shift how it is read',
        'Show the board, duty by duty, how the arrangement meets each duty, and ask it to approve the approach once rather than deal by deal. Commission advice from counsel the board already trusts. Brief lawyers jointly, through a collaborative engagement letter, rather than one party at a time. Write down the risk of not acting next to the risk of acting.',
      ],
      [
        'Shift it together, upstream',
        'Build shared legal capacity: precedents and model clauses others can use, and a reading of the duties, tested with practitioners, that boards can rely on.',
      ],
    ],
    evidence: [
      [
        'Observed',
        'Raised in several conversations: the cautious reading binds more than the duties do. In the Sheffield room, people described risk held alone that could be held together.',
      ],
      [
        'Drafted',
        'A legal view setting out the duties against a many-to-many agreement. A risk-resolution term, drafted and agreed in one collaboration.',
      ],
      [
        'Tried, and where',
        'The legal view was used with one foundation’s board. The risk-resolution term has not yet been used in the situation it was written for.',
      ],
      [
        'Outcome known',
        'Not yet. No account on record of what changed once the board had the reading.',
      ],
      [
        'Not yet tested',
        'Whether the reading holds for other boards, other legal forms, or other countries.',
      ],
    ],
  },
  'One lead, or many-to-many?': {
    blocker: 'lawyers',
    rule: 'A solicitor acts in the best interests of their client. Where clients’ interests conflict, the conduct rules limit acting for more than one of them.',
    ruleSrc:
      'The duty as named in our own early mapping of blockers. We have not yet sourced or checked the conduct rules themselves. That is the first thing for a lawyer to check.',
    reading:
      'So each party takes its own advice, and the funder’s or the lead’s lawyer usually drafts. An agreement among many parties gets read as many separate risks, one per client. Advice tends to the most cautious reading, because the lawyer’s job is to protect that one client.',
    practice:
      'Bilateral agreements, drafted for one side. Advice bought one organisation at a time, often from counsel chosen so the board will trust it. Advice kept private, partly to protect privilege. Smaller partners often go without advice of their own.',
    ourRead:
      'Mainly the practice built around the duty, not the duty itself. The open question: can a lawyer act for a collaboration as a whole, and on what terms?',
    levels: [
      [
        'A workaround, now',
        'Brief lawyers jointly, through a collaborative solicitor engagement letter that says whom the lawyer acts for and how conflicts are handled. Commission counsel the board already trusts, so the advice is not dismissed.',
      ],
      [
        'Shift how it is read',
        'Ask for advice that sets out the range of lawful readings, not only the safest one.',
      ],
      [
        'Shift it together, upstream',
        'Build shared legal capacity: precedents and model clauses others can use, and a tested answer, with practitioners, to what acting for a collaboration could look like within the conduct rules. That is the Legal Lab’s question.',
      ],
    ],
    evidence: [
      [
        'Observed',
        'In our early mapping of blockers, and in one conversation: advice defaulting to the most cautious reading. In another, an organisation testing the limits of charity law with its own counsel found more room than expected.',
      ],
      [
        'Drafted',
        'A collaborative solicitor engagement letter has been proposed. As far as our record shows, it has not been drafted.',
      ],
      [
        'Tried, and where',
        'Funders commissioning established counsel on purpose, so the advice could not be dismissed. In one account, the advice confirmed the flexibility needed.',
      ],
      [
        'Outcome known',
        'Yes, for that one account: the advice confirmed the room. Nothing on record yet for a joint engagement.',
      ],
      [
        'Not yet tested',
        'Whether a joint engagement works under the conduct rules, and who carries its cost.',
      ],
    ],
  },
  'Someone has to hold the money': {
    blocker: 'unincorp',
    rule: 'Trustees must use the charity’s funds only for its purposes, and be able to show they did.',
    ruleSrc:
      'The duty as set out in the same legal view (2024). Is there a rule that bars funding a group without a legal form? Our desk research has so far found guidance, not legislation. That is the first thing to check.',
    reading:
      'Funders’ processes are often said to be required by regulation. In practice they restrict money flowing to unincorporated groups, so the work goes through an intermediary that holds the money and the risk.',
    practice:
      'Eligibility checklists, know-your-customer forms, financial history and minimum turnover thresholds. A fiscal host or lead partner carries the money and the risk, often unpaid for the risk.',
    ourRead:
      'Mostly practice said to be regulation, resting on a real duty to account for funds. The open question is the one in our own notes: how else would you provide accountability for that funding?',
    levels: [
      [
        'A workaround, now',
        'Use a fiscal host, and pay it for the risk it carries, not only for the administration.',
      ],
      [
        'Shift how it is read',
        'Test what due diligence the duty actually needs for a small grant. Share one set of checks across funders, rather than each funder repeating them.',
      ],
      [
        'Shift it together, upstream',
        'Ask, collectively, what accountability for groups without a legal form could look like, such as open ledgers that participants can see, and whether guidance could recognise it.',
      ],
    ],
    evidence: [
      [
        'Observed',
        'In our early mapping of blockers, and raised in conversations.',
      ],
      [
        'Drafted',
        'A fiscal hosting proposal within earlier Many-to-Many work. Its outcome is not on record.',
      ],
      [
        'Tried, and where',
        'Shared due-diligence checks across funders have been piloted elsewhere, according to our desk research. We have not checked those pilots.',
      ],
      ['Outcome known', 'Not yet.'],
      [
        'Not yet tested',
        'What the regulator and the law actually require for a grant to a group without a legal form.',
      ],
    ],
  },
};

// Patterns from the other two archetypes: desk research only
// (the System Blockers spreadsheet, May 2026).
export const OTHER_ARCHETYPE_PATTERNS = [
  {
    arch: 'ppp',
    stage: 'stage-0',
    name: 'System users underrepresented in early design',
    pattern:
      'People who use or are affected by the system are weakly represented when missions and designs are set.',
    el: 'Governing system',
    behind: 'No rule strictly. Sometimes formal consultation requirements.',
  },
  {
    arch: 'ppp',
    stage: 'stage-1',
    name: 'Mission negotiated between corporate partners',
    bk: 'directors',
    pattern:
      'The mission is negotiated mainly between corporate partners, with limited public or civic input.',
    el: 'Ecosystem strategy',
    behind: 'Directors’ duties, and what boards and investors will accept.',
  },
  {
    arch: 'ppp',
    stage: 'stage-2',
    name: 'Partnerships run like procurement',
    bk: 'procurement',
    pattern:
      'Partnerships are structured like buyer and supplier relationships, which limits joint problem-solving.',
    el: 'Legal architecture',
    behind:
      'Public procurement rules, competition law and conflict-of-interest rules.',
  },
  {
    arch: 'ppp',
    stage: 'stage-3',
    name: 'Short payback pressure',
    bk: 'directors',
    pattern:
      'Corporate partners need short payback periods, which limits investment in long-term system infrastructure.',
    el: 'Ecosystem strategy',
    behind: 'Shareholder expectations, internal hurdle rates and capital rules.',
  },
  {
    arch: 'ppp',
    stage: 'stage-3',
    name: 'Liability lands on the public or civic partner',
    bk: 'publicacc',
    pattern:
      'Contracts place most delivery and reputational risk on public or civic partners, even where private actors drive key decisions.',
    el: 'Legal architecture',
    behind: 'Public accountability for failures, and corporate risk frameworks.',
  },
  {
    arch: 'ppp',
    stage: 'stage-3',
    name: 'IP defaults to the corporate partner',
    bk: 'ip',
    pattern:
      'Intellectual property made together defaults to corporate ownership, which limits wider use.',
    el: 'Legal architecture',
    behind: 'IP law, freedom of contract and corporate IP policies.',
  },
  {
    arch: 'ppp',
    stage: 'stage-4',
    name: 'The corporate calendar sets the rhythm',
    pattern:
      'Meetings and decisions follow corporate quarter-ends, and public timelines and community rhythms come second.',
    el: 'Governing system',
    behind: 'Corporate planning and approval cycles. No rule as such.',
  },
  {
    arch: 'ppp',
    stage: 'stage-4',
    name: 'Data locked behind commercial walls',
    bk: 'data',
    pattern:
      'Useful data is held back because of IP, confidentiality or competition concerns.',
    el: 'Learning system',
    behind:
      'Data protection law, competition law and commercial confidentiality.',
  },
  {
    arch: 'ppp',
    stage: 'stage-4',
    name: 'Decisions made in side meetings',
    pattern:
      'Issues are settled through informal channels, which sidelines partners with less access.',
    el: 'Governing system',
    behind: 'No rule. Often against the partnership’s own governance documents.',
  },
  {
    arch: 'ppp',
    stage: 'stage-5',
    name: 'Brand decides what continues',
    pattern:
      'Decisions to continue or scale follow brand and PR value more than system impact.',
    el: 'Learning system',
    behind: 'Brand and investor confidence. No rule as such.',
  },
  {
    arch: 'multi',
    stage: 'stage-1',
    name: 'Wide mission, narrow local bandwidth',
    pattern:
      'A broad mission is set centrally, while local actors have little time or support to interpret it.',
    el: 'Ecosystem strategy',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-1',
    name: 'Wide mission or project aims?',
    pattern:
      'People struggle to tell the long-term mission from near-term project objectives.',
    el: 'Ecosystem strategy',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-2',
    name: 'One template for many places',
    pattern:
      'Central templates for workplans don’t fit the diversity of places and actors.',
    el: 'Organising system',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-2',
    name: 'Relational labour nobody sees',
    pattern:
      'People doing local convening and emotional labour are not recognised or resourced as core roles.',
    el: 'Organising system',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-3',
    name: 'One fiscal host per place',
    bk: 'crossborder',
    pattern:
      'Money flows through one or two organisations per place, which concentrates power and administration.',
    el: 'Legal architecture',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-3',
    name: 'A consortium caught in the middle',
    pattern:
      'The coordinating consortium is pulled between supporting local actors and enforcing funder conditions.',
    el: 'Governing system',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-4',
    name: 'Light but fragile local governance',
    pattern:
      'Local governance stays informal to avoid bureaucracy, so decisions and conflicts have no clear route.',
    el: 'Governing system',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-4',
    name: 'Learning as reporting',
    pattern:
      'Learning sessions across places default to updates, with little time to make sense of things or adapt.',
    el: 'Learning system',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-5',
    name: 'Early allocations stick',
    pattern:
      'Early choices of places and partners become hard to change, even when the evidence shifts.',
    el: 'Ecosystem strategy',
    behind: '',
  },
  {
    arch: 'multi',
    stage: 'stage-5',
    name: 'Cliff-edge endings',
    pattern:
      'Funding ends abruptly at programme close, with little planning for a responsible ending.',
    el: 'Ecosystem strategy',
    behind: '',
  },
];

export const blockerKeysFor = (name, fallback) =>
  BLOCKER_OF[name] ?? (fallback ? [fallback] : []);

export const blockerLine = (name, fallback) => {
  const keys = blockerKeysFor(name, fallback);
  return keys.length
    ? keys.map((key) => BLOCKERS[key].name).join(' · ')
    : 'To be mapped';
};

// Every pattern on the page: the philanthropy journey plus the two archetypes
// we have only desk research for.
export const allPatterns = () => {
  const philanthropy = STAGES.flatMap((stage) =>
    stagePoints(stage).map((point) => ({
      arch: 'phil',
      stage: stage.id,
      name: point.name,
      pattern: point.pattern,
      el: ELEMENT_OF[point.name] ?? '',
      behind: blockerLine(point.name),
      tested: point.tested,
      worked: Boolean(WORKED_ENTRIES[point.name]),
    })),
  );

  const others = OTHER_ARCHETYPE_PATTERNS.map((item) => ({
    ...item,
    tested: 'desk',
    worked: false,
    behind: item.bk
      ? BLOCKERS[item.bk].name + (item.behind ? `. ${item.behind}` : '')
      : item.behind || 'To be mapped',
  }));

  return [...philanthropy, ...others];
};

// How far an underlying blocker reaches across the patterns on this page.
export const reachLine = (key) => {
  const patterns = allPatterns().filter((pattern) =>
    blockerKeysFor(pattern.name, pattern.bk).includes(key),
  );
  if (!patterns.length) return 'No pattern on this page links to it yet';
  const archetypes = new Set(patterns.map((pattern) => pattern.arch));
  const plural = patterns.length > 1 ? 's' : '';
  const across =
    archetypes.size > 1 ? `, across ${archetypes.size} archetypes` : '';
  return `Sits behind ${patterns.length} pattern${plural}${across}`;
};
