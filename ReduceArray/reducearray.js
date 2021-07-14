var playerScores = [
    {
        name: "pedro",
        points : 20
    },
    {
        name: "susana",
        points : 25
    },
    {
        name: "raquel",
        points : 10
    },
    {
        name: "alfonso",
        points : 20
    }
  
  ];
  
   var total = playerScores.reduce((acc,cur) => (acc + cur["points"]),0);
  
  console.log(total) // devuelve el total de puntos del conjunto de objetos de la array playerScores