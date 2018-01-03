// keys should match fields in Dropbox template
// see docs: https://www.dropbox.com/developers/documentation/http/teams#file_properties-templates-add_for_team

const filters = {
  practice: {
    color: '#009e92', // teal
    tags: ['.org', 'equity', 'transformation', 'prosperity', 'health'],
  },
  project: {
    color: '#65bd60', // emerald
    tags: ['JPMC', 'ARC', 'Kuja Kuja'],
  },
  partner: {
    color: '#f6957d', // amber
    tags: ['Chase', 'Bedstuy Restoration Corporation', 'ARC', 'Gates Foundation'],
  },
  type: {
    color: '#6f254c', // aubergine
    tags: ['png', 'ai', 'pdf'],
  },
  medium: {
    color: '#ffdd55', // sunglow
    tags: ['web', 'mobile', 'print'],
  },
  category: {
    color: '#c4e6e5', // mist
    tags: ['report', 'deliverable', 'wireframes', 'template', 'business card', 'form', 'photography', 'video', 'capture'],
  },
  // keywords: {
  //   color: '#f1f0ee';, // warm gray
  //   tags:[] // custom, added by user
  // }
};

export default filters;

/*
Example Dropbox file tag data
{
  practice: "equity",
  project: "Steps",
  partner: "Chase, Bestuy Restoration Corporation",
  type: "ai",
  medium: "print",
  category: "report, deliverable",
}
*/
