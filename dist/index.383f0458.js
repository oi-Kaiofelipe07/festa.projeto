AOS.init();const dataEvento=new Date("Dec 17, 2030 20:00:00"),timeDoEvento=dataEvento.getTime(),contaAshora=setInterval((function(){const e=(new Date).getTime(),t=timeDoEvento-e,o=864e5,n=36e5,a=Math.floor(t/o),r=Math.floor(t%o/n),c=Math.floor(t%n/6e4),d=Math.floor(t%6e4/1e3);document.getElementById("contador").innerHTML=`${a}d ${r}h ${c}m ${d}s`,t<0&&(clearInterval(contaAshora),document.getElementById("contador").innerHTML="Que pena, Você perdeu o evento")}),1e3);
//# sourceMappingURL=index.383f0458.js.map
