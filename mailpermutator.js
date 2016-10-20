function generateEmail(firstname,lastname,domain,mode){
	//Si vous avez des problèmes à utiliser cette fonction ou s'il y a un bug signalez le moi sur GIT
	var emailaddress = [];//tableau temporaire qui contiendra toutes les adresses email à tester
	var emailfinal = [];//tableau final qui contiendra toutes les adresses email à tester
	//firstname c'est le prenom 
	//lastname c'est le nom
	//domain c'est le nom de domaine avec l'extenstion type - ex : doyoubiz.com (petite pub) :-) ou simplement le nom de la boite (par exemple doyoubiz))
	//Tout le monde a une adresse gmail ou yahoo. 
	//Les adresses de type free, orange etc... ne pas souvent ouvertes (sauf si vous bossez chez free, orange etc...)
	//vous pouvez rajouter autant d'extensions que vous voulez, mais ça aura un coût sur la rapidité de la fonction (on s'en fou on n'est pas à la minute près) mais aussi ça augmente le nombre de call à l'api que vous utiliserez.
	if(!mode){
		mode = 1;
	}
	emailend = [
		'@gmail.com',
		'@yahoo.fr'
	];
	if(mode==2){
		emailend.push('@yahoo.com');
		emailend.push('@gmail.fr');
		emailend.push('@wanadoo.fr');
	}
	if(domain){
		//on va vérifier si le nom de domaine est bien formaté
		var count = (domain.match(/./g) || []).length;
		if(count==1){
			emailend.push('@'+domain);	
		}
	}
	//ON VA GENERER TOUTES LES COMBINAISONS POSSIBLES POUR UNE PERSONNE QUI a un prenom et un nom sans espace et sans tirets
	//pour exemple firstname = boris, lastname=tchangang
	//boris.tchangang
	emailaddress.push(firstname.trim()+'.'+lastname.trim());
	//boris_tchangang
	emailaddress.push(firstname.trim()+'_'+lastname.trim());
	//b.tchangang
	emailaddress.push(firstname.trim().slice(0,1)+'.'+lastname.trim());
	//boristchangang
	emailaddress.push(firstname.trim()+lastname.trim());
	//tchangangboris
	emailaddress.push(lastname.trim()+firstname.trim());
	//tchangang.boris
	emailaddress.push(lastname.trim()+'.'+firstname.trim());
	//tchangang_boris
	emailaddress.push(lastname.trim()+'_'+firstname.trim());
	//t.boris
	if(mode==2){
		emailaddress.push(lastname.trim().slice(0,1)+'.'+firstname.trim());
		//bort (type d'adresse rencontré chez Google uniquement pour le moment)
		emailaddress.push(firstname.trim().slice(0,3)+'.'+lastname.trim());
		//tcboris (je ne suis pas sur que ce test soit vraiment utile)
		emailaddress.push(lastname.trim().slice(0,2)+''+firstname.trim());
		//botchangang (je ne suis pas sur que ce test soit vraiment utile)
		emailaddress.push(firstname.trim().slice(0,2)+''+lastname.trim());
	}
	//LES CAS PARTICULIERS TYPE Van Houten ou boris-emmanuel (prénom composé seront pris en compte prochainement).
	for(var i=0;i<emailend.length;i++){
		for(var j=0;j<emailaddress.length;j++){
			emailfinal.push(emailaddress[j]+emailend[i]);
		}
	}
	return emailfinal;
}
