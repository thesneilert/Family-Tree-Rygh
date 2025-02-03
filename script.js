FamilyTree.templates.tommy_Mann.field_2 =
  "<text " +
  FamilyTree.attr.width +
  ' ="150" style="font-size: 14px;" fill="#ffffff" x="150" y="65" text-anchor="start">{val}</text>';
FamilyTree.templates.tommy_Kvinne.field_2 =
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

// https://balkan.app/FamilyTreeJS/Docs/GettingStarted
// pids: are the partner ids
// mid: mother id.
// fid: father id.

family.load(
  [
    {
      id: 1,
      pids: [0],
      mid: [3],
      fid: [2],
      gender: "Mann",
      Navn: "Per Henrik Rygh",
      Fødselsdato: "1929-03-12",
      Dødsdato: "2013-03-22",
      Fødselsby: "Mo i Rana, Norge",
      Dødssted: "Tønsberg",
      Yrke: "Kjeveortoped",
      Utdanning: "",
      photo: "https://sites-cf.mhcache.com/t/255/401/367255401/500/500133_2457476m3b720064a2g51b_A_96x128/NMhQB2Q33R59kP-R577s1Dl3uic=/.jpg",
    },
    {
        id: 2,
        pids: [3],
        fid: [4],
        gender: "Mann",
        Navn: "Per Kristian Rygh",
        Fødselsnavn: "Peder Eilertsen",
        Fødselsdato: "1894-11-29",
        Dødsdato: "1975-02-14",
        Fødselsby: "",
        Dødssted: "Nord-Trøndelag, Norge",
        Yrke: "Ordfører",
        Utdanning: "Jurdisk Embedseksamen i ca. 1920",
        photo: "https://sites-cf.mhcache.com/t/255/401/367255401/500/500131_7431609v204h6h6a38dbj1_A_96x128/3uxKbmLagJjdcnVStsSgYT_uLuw=/.jpg",
      },
      {
        id: 3,
        pids: [2],
        gender: "Kvinne",
        Navn: "Iris Kiær Rygh",
        Fødselsdato: "1894-10-28",
        Dødsdato: "1982-07-31",
        Fødselsby: "Trondheim, Norge",
        Dødssted: "Nord-Trøndelag",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 4,
        pids: [5],
        fid: [6],
        gender: "Mann",
        Navn: "Peter Christian Eilertsen",
        Fødselsdato: "1849-06-23",
        Dødsdato: "",
        Fødselsby: "Overhalden, Norge",
        Dødssted: "NA",
        Yrke: "Kjøbmand Kolonialforretning",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 5,
        pids: [4],
        gender: "Kvinne",
        Navn: "Karen Eilertsen",
        Fødselsnavn: "Karen Olsdatter Meland",
        Fødselsdato: "1851-09-07",
        Dødsdato: "",
        Fødselsby: "Børsa, Norge",
        Dødssted: "",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 6,
        pids: [9],
        fid: [7],
        gender: "Mann",
        Navn: "Eilert Marcus Gram Rygh",
        Fødselsdato: "1794",
        Dødsdato: "1855",
        Fødselsby: "Stavnes, Folda, Nordland, Norge",
        Dødssted: "Skilliås, Overhalla, Norge",
        Yrke: "",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 7,
        pids: [10],
        fid: [8],
        gender: "Mann",
        Navn: "Carl Gautsen Rygh",
        Fødselsdato: "1752",
        Dødsdato: "1809",
        Fødselsby: "",
        Dødssted: "Stavnes, Folda, Nordland, Norge",
        Yrke: "",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 8,
        pids: [11],
        gender: "Mann",
        Navn: "Gaut Carlsen Rygh",
        Fødselsnavn: "Gaut Carlsen",
        Fødselsdato: "1728",
        Dødsdato: "1803-04-17",
        Fødselsby: "Strand, Klinga, Namsos, Norge",
        Dødssted: "Overhalla, Overhalla, Nord-Trøndelag, Norge",
        Yrke: "",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 9,
        pids: [6],
        gender: "Kvinne",
        Navn: "Margrethe Kathrine Rygh",
        Fødselsnavn: "Margrethe Kathrine Asbjørnsdatter",
        Fødselsdato: "1807",
        Dødsdato: "1861-05-26",
        Fødselsby: "Skilliås, Overhalla, Norge",
        Dødssted: "",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 10,
        pids: [7],
        gender: "Kvinne",
        Navn: "Elisabeth Margrethe Gram Rygh",
        Fødselsnavn: "Elisabeth Hansdatter",
        Fødselsdato: "1760",
        Dødsdato: "1794-08-29",
        Fødselsby: "Trondheim, Trøndelag, Norge",
        Dødssted: "Stavnes, Folda, Nordland, Norge",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 11,
        pids: [8],
        fid: [12],
        gender: "Kvinne",
        Navn: "Anne Rygh",
        Fødselsnavn: "Anne Rygh Olsdatter",
        Fødselsdato: "1722",
        Dødsdato: "1806",
        Fødselsby: "Trondheim, Trøndelag, Norge",
        Dødssted: "Overhalla, Nord-Trøndelag, Norge",
        Gård: "Rygh Gård, Overhalla, Nord-Trøndelag, Norge",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 12,
        pids: [0],
        gender: "Mann",
        Navn: "Ole Pedersen Rygh",
        Fødselsdato: "",
        Dødsdato: "1763",
        Fødselsby: "",
        Dødssted: "Overhalla, Nord-Trøndelag, Norge",
        Gård: "Rygh Gård, Overhalla, Nord-Trøndelag, Norge",
        Yrke: "",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 13,
        pids: [0],
        fid: [8],
        mid: [11],
        gender: "Mann",
        Navn: "Ole Gautsen Rygh",
        Fødselsnavn: "Ole Gautsen Lilleøen",
        Fødselsdato: "1754-02-02",
        Dødsdato: "1830-05-09",
        Fødselsby: "Overhalla, Nord-Trøndelag, Norge",
        Dødssted: "Overhalla, Nord-Trøndelag, Norge",
        Gård: "Lilleøen, Overhalla, Nord-Trøndelag, Norge",
        Yrke: "",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 14,
        pids: [15],
        fid: [13],
        mid: [0],
        gender: "Mann",
        Navn: "Peder Strand Rygh",
        Fødselsnavn: "Peder Gautsen Rygh",
        Fødselsdato: "1800-08-07",
        Dødsdato: "1868-04-15",
        Fødselsby: "Overhalla, Nord-Trøndelag, Norge",
        Dødssted: "Verdal, Trøndelag, Norge",
        Gård: "Rygh, Overhalla, Nord-Trøndelag, Norge",
        Yrke: "Bonde, Politiker og Lensmann",
        Utdanning: "Examinatus huris på Universitetet i Oslo",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
      {
        id: 15,
        pids: [14],
        gender: "Kvinne",
        Navn: "Ingeborg Marie Rygh",
        Fødselsnavn: "Ingeborg Marie Bentsen",
        Fødselsdato: "1809-02-10",
        Dødsdato: "1878-04-19",
        Fødselsby: "Sanden, Trondheim, Sør-Trøndelag, Norge",
        Dødssted: "Haug, Verdal, Nord-Trøndelag, Norge",
        Yrke: "Hustru",
        Utdanning: "",
        photo: "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728",
      },
  ]
);
