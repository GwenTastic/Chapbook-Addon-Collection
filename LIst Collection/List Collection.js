engine.extend('1.0.0', () => {
    config.template.inserts = [{
        match: /^List Collection/i,
        render(collection, prop) {
            let output = "";
            let divider = prop.Divider || " - ";
            if(Array.isArray(collection))
            { // Provided Collection is an Array
                for(item in collection) {
                    if(prop.AllowCount && typeof prop.AllowCount != "undefined")
                    { // is AllowCount: true ? add index number if yes
                        output += (Number(item)+1) + divider;
                    }
					output +=  collection[item] + "<br>";
				}
            }
            else if(typeof collection === "object")
            { // Provided Collection is an Object
			    for(item in collection) {
                    if(prop.AllowCount && typeof prop.AllowCount != "undefined")
                    { // is AllowCount set to true? add index number if yes
			    	    var i = i + 1 || 1;
                        output += i + divider;
                    }
                    // is DisplayName set? if not get Name or name, if those don't
                    // exist then set it to ""
				    let displayName = (prop.DisplayName != "" && typeof prop.DisplayName != "undefined") ? collection[item][prop.DisplayName] : collection[item].hasOwnProperty("Name") ? collection[item].Name : collection[item]. hasOwnProperty("name") ? collection[item].name : "";
                    output += displayName;
                    if(typeof prop.Detailed != "undefined" && prop.Detailed.toLowerCase() === "all")
                    { // is Detailed: "all", get all properties beside displayName
				    	for(key in collection[item]) {
                            if(collection[item][key] != displayName)
				    		    output += divider + collection[item][key];
				    	}
				    }
                    else if(prop.Detailed != "" && typeof prop.Detailed != "undefined")
                    { // Detailed: "properties" split it to an array and get
                      // all passed in properties
				    	prop.Detailed.split(" ").forEach(detail => output += divider + collection[item][detail]);
				    }
				    output += "<br>";
                }
            }
            return output;
        }
    }, ...config.template.inserts];
});