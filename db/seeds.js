use rockclimbing;
db.dropDatabase()

db.crags.insert([
  { 
    name: "Hawkcraig",
    latlng: {56.05028,-3.28583},
    climbs: [
      {name: "Pain Pillar", grade: "VS 4c"},
      {name: "Asinine", grade: "VS 5a"}
    ]
  },
  { 
    name: "Limekilns",
    latlng: {56.03720,-3.49420},
    climbs: [
      {name: "Cruel Summer", grade: "E2 5c"},
      {name: "Forbidden Colours", grade: "HVS 5a"}
    ]
  }
]);