// Draft condition cards from desk research, per stage (Georgia, 6 Oct).
// The six Sheffield workshop cards live in CONDITIONS in content.js.
// tested: 'iw' interviews and workshops · 'i' interviews · 'w' workshops ·
// '' research only, to test further.

export const DRAFT_POINTS = {
  'stage-0': [
    {
      name: 'Who is in the room',
      moment:
        'Eligibility is set: who can apply, who is invited, who can hold money.',
      pattern:
        'Eligibility follows existing infrastructure (a bank account, a constitution, a track record), so the places and groups with least infrastructure are excluded before anything starts.',
      blocks: {
        who: 'Grassroots and unincorporated groups, and places with little civic infrastructure',
        how: 'A door that was never open to them.',
      },
      enables: {
        who: 'Grant teams and boards',
        how: 'A pool of applicants who can be checked, paid and held to account.',
      },
      tested: 'w',
    },
    {
      name: 'How fiduciary duty is read',
      moment:
        'A board decides whether to pool money, co-fund or join a collaboration.',
      pattern:
        'Fiduciary duty is often read as a reason to keep decisions close, and the cautious reading tends to win.',
      blocks: {
        who: 'Collaborations and pooled funds trying to form',
        how: 'A cautious answer that is hard to question, because it sounds legal.',
      },
      enables: {
        who: 'Boards and their advisers',
        how: 'A clear line of accountability for every pound spent.',
      },
      tested: 'i',
    },
    {
      name: 'Who can take part in governing',
      moment: 'A board, panel or steering group is formed.',
      pattern:
        'Governing roles are usually unpaid and time-heavy, so they tend to be filled by people who already have the time and security to give.',
      blocks: {
        who: 'People with lived experience, and people on low incomes or benefits',
        how: 'A seat that is open in principle but hard to take up.',
      },
      enables: {
        who: 'Existing trustees and regulators',
        how: 'Protection against conflicts of interest and private benefit.',
      },
      tested: 'i',
    },
  ],
  'stage-1': [
    {
      name: 'Funders’ goals don’t line up',
      moment: 'Several funders agree a shared aim.',
      pattern:
        'Each funder brings its own strategy, so the shared aim is written loosely enough for every strategy to fit inside it.',
      blocks: {
        who: 'The collaboration and its backbone',
        how: 'A mission that means different things to each funder, and reporting to all of them.',
      },
      enables: {
        who: 'Each funder’s board',
        how: 'A way to join without changing its own strategy.',
      },
      tested: '',
    },
    {
      name: 'Whose name is on it',
      moment: 'The collaboration is named, branded and announced.',
      pattern:
        'Funders need to show their own contribution, so credit is claimed separately, and shared outcomes are cut into attributable pieces.',
      blocks: {
        who: 'Partners doing shared work',
        how: 'Pressure to show which funder’s money did what.',
      },
      enables: {
        who: 'Communications and fundraising teams',
        how: 'A story they can tell their own donors and board.',
      },
      tested: '',
    },
  ],
  'stage-2': [
    {
      name: 'One lead, or many-to-many?',
      moment:
        'The structure is chosen: one lead partner holding the grant, or a shared vehicle or agreement among many parties.',
      pattern:
        'One lead partner is the default, because a funder needs a single accountable entity, so a network is contracted as a hierarchy.',
      blocks: {
        who: 'The other partners',
        how: 'Junior status in a collaboration they co-own, and by the lead, as liability for others’ work.',
      },
      enables: {
        who: 'Funders and their auditors',
        how: 'One contract, one report and one place to look when something goes wrong.',
      },
      tested: 'i',
    },
    {
      name: 'Who decides',
      moment:
        'The funder decides who will make the grant decisions: the board, staff, a panel, or a community.',
      pattern:
        'Decisions stay with the board, because delegating feels legally risky, even where the governing document allows it.',
      blocks: {
        who: 'Communities and panels asked to advise but not decide',
        how: 'Participation without power.',
      },
      enables: {
        who: 'Trustees',
        how: 'Keeping hold of decisions they remain accountable for anyway.',
      },
      tested: 'i',
    },
    {
      name: 'Many pots, one collaboration',
      moment: 'Several funding streams are combined.',
      pattern:
        'Each pot comes with its own rules, timings and reports, so the collaboration is stitched together from pieces that were never designed to fit.',
      blocks: {
        who: 'Backbone organisations',
        how: 'Time spent reconciling funders instead of doing the work.',
      },
      enables: {
        who: 'Each funder',
        how: 'Control over exactly what its own money buys.',
      },
      tested: 'i',
    },
  ],
  'stage-3': [
    {
      name: 'More checks than the law asks',
      moment: 'The depth of due diligence is set.',
      pattern:
        'Checks are set at the level that would protect the funder in the worst case, and every funder repeats them.',
      blocks: {
        who: 'Small organisations',
        how: 'Weeks of paperwork for every grant, and by collaborations, as the same checks done again by each funder.',
      },
      enables: {
        who: 'Boards and risk committees',
        how: 'A defensible record if anything goes wrong.',
      },
      tested: 'i',
    },
    {
      name: 'Someone has to hold the money',
      moment: 'The collaboration picks who holds funds for groups that cannot.',
      pattern:
        'A fiscal host or lead partner holds the money and the risk, usually without being paid for carrying the risk.',
      blocks: {
        who: 'Hosts',
        how: 'Liability with no budget, and by the groups hosted, as dependence on someone else’s systems.',
      },
      enables: {
        who: 'Funders',
        how: 'A way to reach groups they could not fund directly.',
      },
      tested: 'i',
    },
    {
      name: 'Money that can’t be spent',
      moment:
        'A foundation decides how much of its money is available for the collaboration.',
      pattern:
        'Endowment is treated as untouchable, so the foundation’s largest resource sits outside the collaboration.',
      blocks: {
        who: 'Collaborations needing scale or long horizons',
        how: 'The foundation’s wealth being off the table.',
      },
      enables: {
        who: 'Trustees and investment committees',
        how: 'The foundation surviving to fund in future.',
      },
      tested: '',
    },
    {
      name: 'Paying people for what they know',
      moment: 'Terms are set for people with lived experience who take part.',
      pattern:
        'Payment is avoided or kept token, because tax, benefits and employment rules make it complicated.',
      blocks: {
        who: 'Participants',
        how: 'Giving expertise for free, or risking their benefits.',
      },
      enables: {
        who: 'Organisations',
        how: 'Avoiding liabilities they don’t know how to manage.',
      },
      tested: 'i',
    },
  ],
  'stage-4': [
    {
      name: 'Every funder wants a different report',
      moment: 'Reporting is designed.',
      pattern:
        'Each funder sets its own format and timing, so a collaboration with several funders writes several reports about the same work.',
      blocks: {
        who: 'Partners and backbones',
        how: 'Reporting time taken from delivery.',
      },
      enables: {
        who: 'Each funder’s board',
        how: 'Information in the shape it already knows how to read.',
      },
      tested: 'i',
    },
    {
      name: 'When the coordinator leaves',
      moment: 'A key person moves on, or partners’ time runs out.',
      pattern:
        'The collaboration depends on one or two people whose coordinating work was never funded as a role, so it stalls when they go.',
      blocks: {
        who: 'The collaboration',
        how: 'Losing its memory and its relationships at once.',
      },
      enables: { who: 'Funders', how: 'Low running costs while it lasts.' },
      tested: 'i',
    },
    {
      name: 'Not safe to say it’s going wrong',
      moment: 'A milestone report is due and something isn’t working.',
      pattern:
        'Partners report success, because admitting problems feels like risking the next grant.',
      blocks: {
        who: 'The collaboration’s learning',
        how: 'Problems that surface too late to fix.',
      },
      enables: {
        who: 'Grantees and funders alike',
        how: 'A clean report that keeps the relationship calm.',
      },
      tested: 'i',
    },
    {
      name: 'The risk register is kept for the funder',
      moment: 'The board reviews risk.',
      pattern:
        'The register records risks to the institution, its money and reputation, and has no line for the risk of not acting.',
      blocks: {
        who: 'Partners and the collaboration’s purpose',
        how: 'Caution always winning.',
      },
      enables: {
        who: 'Boards and auditors',
        how: 'A familiar and defensible record.',
      },
      tested: 'i',
    },
  ],
  'stage-5': [
    {
      name: 'Learning that changes nothing',
      moment: 'An evaluation or learning review is finished.',
      pattern:
        'Learning is gathered and reported, but no decision is waiting for it, so it changes nothing.',
      blocks: {
        who: 'Learning partners and the collaboration',
        how: 'Insight with nowhere to go.',
      },
      enables: {
        who: 'Funders',
        how: 'Evidence of rigour without having to change course.',
      },
      tested: 'i',
    },
    {
      name: 'New over what works',
      moment: 'A funder decides whether to fund the next phase.',
      pattern:
        'New projects are favoured over continuing ones, so work that is working is not renewed.',
      blocks: {
        who: 'Established collaborations',
        how: 'Having to reinvent themselves to stay funded.',
      },
      enables: {
        who: 'Funders and their boards',
        how: 'A fresh story and room in the budget.',
      },
      tested: '',
    },
    {
      name: 'The funder leaves',
      moment: 'A funder refreshes its strategy.',
      pattern:
        'Grants end with a strategy change, often with little notice or explanation.',
      blocks: { who: 'The collaboration', how: 'A cliff edge.' },
      enables: {
        who: 'The funder',
        how: 'Freedom to move its money where its new strategy points.',
      },
      tested: 'i',
    },
    {
      name: 'Afraid of being blamed',
      moment: 'A collaboration hasn’t worked, and the board asks why.',
      pattern:
        'Boards avoid funding anything that might fail visibly, so experimental and long-term work struggles to start.',
      blocks: {
        who: 'Experimental and long-term work',
        how: 'Never being funded in the first place.',
      },
      enables: {
        who: 'Trustees',
        how: 'Protection for their own reputation and the foundation’s.',
      },
      tested: 'i',
    },
  ],
};
