FamilyTree.templates.tommy_male.field_2 =
  "<text " +
  FamilyTree.attr.width +
  ' ="150" style="font-size: 14px;" fill="#ffffff" x="150" y="65" text-anchor="start">{val}</text>';
FamilyTree.templates.tommy_female.field_2 =
  "<text " +
  FamilyTree.attr.width +
  ' ="150" style="font-size: 14px;" fill="#ffffff" x="150" y="65" text-anchor="start">{val}</text>';

var family = new FamilyTree(document.getElementById("tree"), {
  mode: "dark",
  nodeMenu: {
    edit: { text: "Edit" },
    details: { 
      text: "Details", 
      show: function (sender, args) {
        var personDetails = args.data;
        var detailsHtml = "<ul>";
        for (var key in personDetails) {
          if (personDetails.hasOwnProperty(key)) {
            if (personDetails[key]) {
              detailsHtml += "<li><strong>" + key + ":</strong> " + personDetails[key] + "</li>";
            } else {
              detailsHtml += "<li><strong>" + key + ":</strong> N/A</li>";
            }
          }
        }
        detailsHtml += "</ul>";
        document.getElementById('sideMenu').innerHTML = detailsHtml;
      }
    },
  },
  nodeBinding: {
    field_0: "Navn",
    field_1: "Fødselsdato",
    field_2: "age",
    img_0: "photo",
  },
  editForm: {},
});

function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

family.on("field", function (sender, args) {
  if (args.name == "age") {
    var bd = args.data["Fødselsdato"];
    var dd = args.data["Dødsdato"];
    var bdate = new Date(bd);
    var ddate = new Date(dd);
    var age = getAge(bdate, ddate);
    args.value = age;
  }
});

family.load(
  [
    {
      id: 1,
      pids: [0],
      mid: [3],
      fid: [2],
      gender: "male",
      Navn: "Per Henrik Rygh",
      Fødselsdato: "1929-03-12",
      Dødsdato: "2013-03-22",
      Fødselsby: "Mo i Rana",
      Dødssted: "Tønsberg",
      Yrke: "Kjeveortoped",
      Utdanning: "",
      photo: "https://sites-cf.mhcache.com/t/255/401/367255401/500/500133_2457476m3b720064a2g51b_A_96x128/NMhQB2Q33R59kP-R577s1Dl3uic=/.jpg",
    },
    {
        id: 2,
        pids: [3],
        gender: "male",
        Navn: "Per Kristian Rygh",
        Fødselsdato: "1894-11-29",
        Dødsdato: "1975-02-14",
        Fødselsby: "",
        Dødssted: "Nord-Trøndelag",
        Yrke: "Ordfører",
        Utdanning: "",
        photo: "https://sites-cf.mhcache.com/t/255/401/367255401/500/500131_7431609v204h6h6a38dbj1_A_96x128/3uxKbmLagJjdcnVStsSgYT_uLuw=/.jpg",
      },
      {
        id: 3,
        pids: [2],
        gender: "female",
        Navn: "Iris Kiær Rygh",
        Fødselsdato: "1894-10-28",
        Dødsdato: "1982-07-31",
        Fødselsby: "Trondheim",
        Dødssted: "Nord-Trøndelag",
        Yrke: "Husmor",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
  ]
);
