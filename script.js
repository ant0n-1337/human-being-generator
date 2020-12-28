var state = [
    { name: "Birmingham, AL" },
    { name: "Montgomery, AL" },
    { name: "Huntsville, AL" },
    { name: "Tuscaloosa, AL" },
    { name: "Hoover, AL" },
    { name: "Phoenix, AZ" },
    { name: "Tucson, AZ" },
    { name: "Mesa, AZ" },
    { name: "Chandler, AZ" },
    { name: "Glendale, AZ" },
    { name: "Little Rock, AR" },
    { name: "Fort Smith, AR" },
    { name: "Springdale, AR" },
    { name: "Bentonville, AR" },
    { name: "Conway, AR" },
    { name: "Los Angeles, CA" },
    { name: "San Diego, CA" },
    { name: "Compton, CA" },
    { name: "San Francisco, CA" },
    { name: "Oakland, CA" },
    { name: "Denver, CO" },
    { name: "Colorado Springs, CO" },
    { name: "Aurora, CO" },
    { name: "Fort Collins, CO" },
    { name: "Lakewood, CO" },
    { name: "Bridgeport, CT" },
    { name: "New Haven, CT" },
    { name: "Stamford, CT" },
    { name: "Hartford, CT" },
    { name: "Norwalk, CT" },
    { name: "Washington, DC" },
    { name: "Jacksonville, FL" },
    { name: "Miami, FL" },
    { name: "Tampa, FL" },
    { name: "Orlando, FL" },
    { name: "Fort Myers, FL" },
    { name: "Atlanta, GA" },
    { name: "Columbus, GA" },
    { name: "Sandy Springs, GA" },
    { name: "Roswell, GA" },
    { name: "Johns Creek, GA" },
    { name: "Chicago, IL" },
    { name: "Rockford, IL" },
    { name: "Springfield, IL" },
    { name: "Peoria, IL" },
    { name: "Cicero, IL" },
    { name: "Indianapolis, IN" },
    { name: "Fort Wayne, IN" },
    { name: "Greenwood, IN" },
    { name: "Evansville, IN" },
    { name: "Mishawaka, IN" },
    { name: "Wichita, KS" },
    { name: "Overland Park, KS" },
    { name: "Kansas City, KS" },
    { name: "Lawrence, KS" },
    { name: "Hutchinson, KS" },
    { name: "New Orleans, LA" },
    { name: "Shreveport, LA" },
    { name: "Lafayette, LA" },
    { name: "Lake Charles, LA" },
    { name: "Bossier City, LA" },
    { name: "Boston, MA" },
    { name: "Worcester, MA" },
    { name: "Cambridge, MA" },
    { name: "Fitchburg, MA" },
    { name: "Brockton, MA" },
    { name: "Detroit, MI" },
    { name: "Warren, MI" },
    { name: "Sterling Heights, MI" },
    { name: "Roseville, MI" },
    { name: "Kentwood, MI" },
    { name: "Minneapolis, MN" },
    { name: "St. Paul, MN" },
    { name: "Rochester, MN" },
    { name: "Burnsville, MN" },
    { name: "Plymouth, MN" },
    { name: "Kansas City, MO" },
    { name: "St. Louis, MO" },
    { name: "Columbia, MO" },
    { name: "Chesterfield, MO" },
    { name: "Blue Springs, MO" },
    { name: "Las Vegas, NV" },
    { name: "Henderson, NV" },
    { name: "North Las Vegas, NV" },
    { name: "Carson City, NV" },
    { name: "Reno, NV" },
    { name: "Newark, NJ" },
    { name: "Jersey City, NJ" },
    { name: "Atlantic City, NJ" },
    { name: "West New York, NJ" },
    { name: "Paterson, NJ" },
    { name: "Albuquerque, NM" },
    { name: "Santa Fe, NM" },
    { name: "Roswell, NM" },
    { name: "Farmington, NM" },
    { name: "Clovis, NM" },
    { name: "New York, NY" },
    { name: "Buffalo, NY" },
    { name: "Niagara Falls, NY" },
    { name: "Freeport, NY" },
    { name: "Mount Vernon, NY" },
    { name: "Charlotte, NC" },
    { name: "Greensboro, NC" },
    { name: "Asheville, NC" },
    { name: "Chapel Hill, NC" },
    { name: "Kannapolis, NC" },
    { name: "Columbus, OH" },
    { name: "Cleveland, OH" },
    { name: "Cincinnati, OH" },
    { name: "Akron, OH" },
    { name: "Dayton, OH" },
    { name: "Portland, OR" },
    { name: "Eugene, OR" },
    { name: "Beaverton, OR" },
    { name: "Salem, OR" },
    { name: "Gresham, OR" },
    { name: "Philadelphia, PA" },
    { name: "Pittsburgh, PA" },
    { name: "Lancaster, PA" },
    { name: "Reading, PA" },
    { name: "York, PA" },
    { name: "Memphis, TN" },
    { name: "Knoxville, TN" },
    { name: "Clarksville, TN" },
    { name: "Jackson, TN" },
    { name: "Johnson City, TN" },
    { name: "Houston, TX" },
    { name: "San Antonio, TX" },
    { name: "Dallas, TX" },
    { name: "Austin, TX" },
    { name: "Wichita Falls, TX" },
    { name: "Salt Lake City, UT" },
    { name: "West Valley City, UT" },
    { name: "West Jordan, UT" },
    { name: "Layton, UT" },
    { name: "Riverton, UT" },
    { name: "Virginia Beach, VA" },
    { name: "Norfolk, VA" },
    { name: "Lynchburg, VA" },
    { name: "Alexandria, VA" },
    { name: "Hampton, VA" },
    { name: "Seattle, WA" },
    { name: "Tacoma, WA" },
    { name: "Vancouver, WA" },
    { name: "Redmond, WA" },
    { name: "Auburn, WA" },
    { name: "Milwaukee, WI" },
    { name: "Madison, WI" },
    { name: "Green Bay, WI" },
    { name: "Kenosha, WI" },
    { name: "Racine, WI" }
]


function generate(){
    var gender = randomizeGender();
    var genderPrint = "gender="+gender;
    var minAge = Math.floor(Math.random(12, 55)*55);
    var maxAge = minAge+5;
    var outputAge = minAge+3;
    
    function randomizeGender(){
        var randG = Math.floor(Math.random(0, 1)*2);
        console.log("randG = "+randG);
        switch (randG){
            case 0:
                return "male";
            case 1:
                return "female";
        }
    }

    var agePrint = "&minimum_age="+minAge+"&minimum_age="+maxAge;

    const source = "https://fakeface.rest/face/view?"+genderPrint+agePrint;

    console.log("gender = "+gender);
    console.log("genderPrint = "+genderPrint);
    console.log("agePrint = "+agePrint);
    console.log("source = "+source);

    document.getElementById("photoContainer").innerHTML = "<img id='photo' src='"+source+"'>";
    document.getElementById("info2").innerHTML = outputAge+"yo";
    randomizeCountry();
}

function randomizeCountry(){
    var randC = Math.floor(Math.random(1, 151)*151);
    document.getElementById("info").innerHTML = state[randC].name;
}


