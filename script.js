const state = [
    "Birmingham, AL","Montgomery, AL","Huntsville, AL","Tuscaloosa, AL","Hoover, AL","Phoenix, AZ","Tucson, AZ","Mesa, AZ","Chandler, AZ","Glendale, AZ","Little Rock, AR","Fort Smith, AR","Springdale, AR","Bentonville, AR","Conway, AR","Los Angeles, CA","San Diego, CA","Compton, CA","San Francisco, CA","Oakland, CA","Denver, CO","Colorado Springs, CO","Aurora, CO","Fort Collins, CO","Lakewood, CO","Bridgeport, CT","New Haven, CT","Stamford, CT","Hartford, CT","Norwalk, CT","Washington, DC","Jacksonville, FL","Miami, FL","Tampa, FL","Orlando, FL","Fort Myers, FL","Atlanta, GA","Columbus, GA","Sandy Springs, GA","Roswell, GA","Johns Creek, GA","Chicago, IL","Rockford, IL","Springfield, IL","Peoria, IL","Cicero, IL","Indianapolis, IN","Fort Wayne, IN","Greenwood, IN","Evansville, IN","Mishawaka, IN","Wichita, KS","Overland Park, KS","Kansas City, KS","Lawrence, KS","Hutchinson, KS","New Orleans, LA","Shreveport, LA","Lafayette, LA","Lake Charles, LA","Bossier City, LA","Boston, MA","Worcester, MA","Cambridge, MA","Fitchburg, MA","Brockton, MA","Detroit, MI","Warren, MI","Sterling Heights, MI","Roseville, MI","Kentwood, MI","Minneapolis, MN","St. Paul, MN","Rochester, MN","Burnsville, MN","Plymouth, MN","Kansas City, MO","St. Louis, MO","Columbia, MO","Chesterfield, MO","Blue Springs, MO","Las Vegas, NV","Henderson, NV","North Las Vegas, NV","Carson City, NV","Reno, NV","Newark, NJ","Jersey City, NJ","Atlantic City, NJ","West New York, NJ","Paterson, NJ","Albuquerque, NM","Santa Fe, NM","Roswell, NM","Farmington, NM","Clovis, NM","New York, NY","Buffalo, NY","Niagara Falls, NY","Freeport, NY","Mount Vernon, NY","Charlotte, NC","Greensboro, NC","Asheville, NC","Chapel Hill, NC","Kannapolis, NC","Columbus, OH","Cleveland, OH","Cincinnati, OH","Akron, OH","Dayton, OH","Portland, OR","Eugene, OR","Beaverton, OR","Salem, OR","Gresham, OR","Philadelphia, PA","Pittsburgh, PA","Lancaster, PA","Reading, PA","York, PA","Memphis, TN","Knoxville, TN","Clarksville, TN","Jackson, TN","Johnson City, TN","Houston, TX","San Antonio, TX","Dallas, TX","Austin, TX","Wichita Falls, TX","Salt Lake City, UT","West Valley City, UT","West Jordan, UT","Layton, UT","Riverton, UT","Virginia Beach, VA","Norfolk, VA","Lynchburg, VA","Alexandria, VA","Hampton, VA","Seattle, WA","Tacoma, WA","Vancouver, WA","Redmond, WA","Auburn, WA","Milwaukee, WI","Madison, WI","Green Bay, WI","Kenosha, WI", "Racine, WI"
];

const sexuality = ["Straight", "Gay", "Bisexual", "Pansexual", "Asexual", "Queer"];
const religion = ["Catholic", "Protesant", "Atheist", "Agnostic", "Mormon", "Jew", "Muslim", "Buddhist", "Hinduist", "Rastafarian", "Shintoist", "Taoism", "Pagan,"];
const relationship = ["Single", "Married", "Engaged", "Open relationship", "Widowed", "Divorced"];

function generate(){
    var gender = randomizeGender();
    var genderPrint = "gender="+gender;
    var minAge = randomizeMinAge();
    var maxAge = minAge+5;
    var outputAge = randomizeOutputAge();
    
    function randomizeMinAge(){
        min = Math.ceil(15);
        max = Math.floor(55);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    function randomizeOutputAge(){
        min = Math.ceil(minAge);
        max = Math.floor(maxAge);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function randomizeGender(){
        var randG = Math.floor(Math.random(0, 1)*2);
        console.log("randG = "+randG);
        switch (randG){
            case 0:
                document.getElementById("info2").innerHTML = "male";
                return "male";
            case 1:
                document.getElementById("info2").innerHTML = "female";
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
    document.getElementById("info3").innerHTML = outputAge+"yo";
    randomizeCountry();
    randomizeSexuality();
    randomizeReligion();
    randomizeRelationship();
}

function randomizeCountry(){
    var randC = Math.floor(Math.random(1, 151)*151);
    document.getElementById("info").innerHTML = state[randC];
}

function randomizeSexuality(){
    var randSx = Math.floor(Math.random(0, 4)*4);
    document.getElementById("info4").innerHTML = sexuality[randSx];
}

function randomizeReligion(){
    var randRg = Math.floor(Math.random(0, 12)*12);
    document.getElementById("info5").innerHTML = religion[randRg];
}

function randomizeRelationship(){
    var randRs = Math.floor(Math.random(0, 5)*5);
    document.getElementById("info6").innerHTML = relationship[randRs];
}

/*
    code cleaning and optimalization, html upgrades, design;
    political views (with compass probably); family (sons, daughters, brothers, sisters); names surnames etc; profession; fav things - music, food, movies, tv series; material goods (car, phone, gaming console, luxury goods); housing conditions (a detached house, flat, apartament, rented room)
*/

