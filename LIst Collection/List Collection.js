engine.extend('1.0.0', () => {
    config.template.inserts = [{
        match: /^List Collection/i,
        render(collection, prop) {
            let output = "";
			if(Array.isArray(collection))
				for(item in collection) {
                    //console.log(item);
                    if(prop.AllowCount && typeof prop.AllowCount != "undefined")
                        output += (Number(item)+1) + " - ";
					output +=  collection[item] + "<br>";
				}
			else if(typeof collection === "object") {
                //console.log(collection);
			    console.table(prop);
			    for(item in collection) {
                    if(prop.AllowCount && typeof prop.AllowCount != "undefined") {
			    	    var i = i + 1 || 1;
                        output += i + " - ";
                    }
				    let displayName = (prop.DisplayName != "" && typeof prop.DisplayName != "undefined") ? collection[item][prop.DisplayName] : collection[item].hasOwnProperty("Name") ? collection[item].Name : collection[item]. hasOwnProperty("name") ? collection[item].name : "";
                    output += displayName;
                    console.log(displayName);
				    if(typeof prop.Detailed != "undefined" && prop.Detailed.toLowerCase() === "all") {
				    	for(key in collection[item]) {
                            if(collection[item][key] != displayName)
				    		    output += " - " + collection[item][key];
				    	}
				    }
				    else if(prop.Detailed != "" && typeof prop.Detailed != "undefined") {
				    	prop.Detailed.split(" ").forEach(detail => output += " - " + collection[item][detail]);
				    }
				    output += "<br>";
                }
            }
		    console.log(output);
            return output;
        }
    }, ...config.template.inserts];
});