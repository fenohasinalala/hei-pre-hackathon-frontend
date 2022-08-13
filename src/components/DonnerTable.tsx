import React from 'react';
import { data, dataReal, interfaceDate, session} from "../intaerface/interface";



const DonnerTable: () => interfaceDate = () => {
    let jobArray=["Dentist","RegisteredNurse","Pharmacist","ComputerSystemsAnalyst","Physician","DatabaseAdministrator",
    "SoftwareDeveloper","PhysicalTherapist","WebDeveloper","DentalHygienist","OccupationalTherapist","Veterinarian","ComputerProgrammer",
    "SchoolPsychologist","PhysicalTherapistAssistant","Interpreter&Translator","MechanicalEngineer","VeterinaryTechnologist&Technician",
    "Epidemiologist","ITManager","MarketResearchAnalyst","DiagnosticMedicalSonographer","ComputerSystemsAdministrator","RespiratoryTherapist",
    "MedicalSecretary","CivilEngineer","SubstanceAbuseCounselor","Speech-LanguagePathologist","Landscaper&Groundskeeper","RadiologicTechnologist",
    "CostEstimator","FinancialAdvisor","Marriage&FamilyTherapist","MedicalAssistant","Lawyer","Accountant","ComplianceOfficer","HighSchoolTeacher",
    "ClinicalLaboratoryTechnician","Maintenance&RepairWorker","BookkeepingAccounting&AuditClerk","FinancialManager","Recreation&FitnessWorker",
    "InsuranceAgent","ElementarySchoolTeacher","DentalAssistant","ManagementAnalyst","HomeHealthAide","PharmacyTechnician","ConstructionManager","PublicRelationsSpecialist",
    "MiddleSchoolTeacher","MassageTherapist","Paramedic","PreschoolTeacher","Hairdresser","MarketingManager","PatrolOfficer","SchoolCounselor","ExecutiveAssistant","FinancialAnalyst",
    "PersonalCareAide","ClinicalSocialWorker","BusinessOperationsManager","LoanOfficer","MeetingConvention&EventPlanner","MentalHealthCounselor","NursingAide","SalesRepresentative",
    "Architect","SalesManager","HRSpecialist","Plumber","RealEstateAgent","Glazier","ArtDirector","CustomerServiceRepresentative","Logistician","AutoMechanic","BusDriver","RestaurantCook",
    "Child&FamilySocialWorker","AdministrativeAssistant","Receptionist","Paralegal","CementMason&ConcreteFinisher","Painter","SportsCoach","TeacherAssistant","Brickmason&Blockmason","Cashier",
    "Janitor","Electrician","DeliveryTruckDriver","Maid&Housekeeper","Carpenter","SecurityGuard","ConstructionWorker","Fabricator","Telemarketer"];
    let nameArray=["Liam","Noah","Oliver","Elijah","James","William","Benjamin","Lucas","Henry","Theodore","Jack","Levi","Alexander","Jackson","Mateo","Daniel",
    "Michael","Mason","Sebastian","Ethan","Logan","Owen","Samuel","Jacob","Asher","Aiden","John","Joseph","Wyatt","David","Leo","Luke","Julian","Hudson","Grayson",
    "Matthew","Ezra","Gabriel","Carter","Isaac","Jayden","Luca","Anthony","Dylan","Lincoln","Thomas","Maverick","Elias","Josiah","Charles","Caleb","Christopher",
    "Ezekiel","Miles","Jaxon","Isaiah","Andrew","Joshua","Nathan","Nolan","Adrian","Cameron","Santiago","Eli","Aaron","Ryan","Angel","Cooper","Waylon","Easton",
    "Kai","Christian","Landon","Colton","Roman","Axel","Brooks","Jonathan","Robert","Jameson","Ian","Everett","Greyson","Wesley","Jeremiah","Hunter","Leonardo",
    "Jordan","Jose","Bennett","Silas","Nicholas","Parker","Beau","Weston","Austin","Connor","Carson","Dominic","Xavier","Jaxson","Jace","Emmett","Adam","Declan",
    "Rowan","Micah","Kayden","Gael","River","Ryder","Kingston","Damian","Sawyer","Luka","Evan","Vincent","Legend","Myles","Harrison","August","Bryson","Amir",
    "Giovanni","Chase","Diego","Milo","Jasper","Walker","Jason","Brayden","Cole","Nathaniel","George","Lorenzo","Zion","Luis","Archer","Enzo","Jonah","Thiago",
    "Theo","Ayden","Zachary","Calvin","Braxton","Ashton","Rhett","Atlas","Jude","Bentley","Carlos","Ryker","Adriel","Arthur","Ace","Tyler","Jayce","Max","Elliot",
    "Graham","Kaiden","Maxwell","Juan","Dean","Matteo","Malachi","Ivan","Elliott","Jesus","Emiliano","Messiah","Gavin","Maddox","Camden","Hayden","Leon","Antonio",
    "Justin","Tucker","Brandon","Kevin","Judah","Finn","King","Brody","Xander","Nicolas","Charlie","Arlo","Emmanuel","Barrett","Felix","Alex","Miguel","Abel","Alan",
    "Beckett","Amari","Karter","Timothy","Abraham","Jesse","Zayden","Blake","Alejandro","Dawson","Tristan","Victor","Avery","Joel","Grant","Eric","Patrick","Peter",
    "Richard","Edward","Andres","Emilio","Colt","Knox","Beckham","Adonis","Kyrie","Matias","Oscar","Lukas","Marcus","Hayes","Caden","Remington","Griffin","Nash",
    "Israel","Steven","Holden","Rafael","Zane","Jeremy","Kash","Preston","Kyler","Jax","Jett","Kaleb","Riley","Simon","Phoenix","Javier","Bryce","Louis","Mark",
    "Cash","Lennox","Paxton","Malakai","Paul","Kenneth","Nico","Kaden","Lane","Kairo","Maximus","Omar","Finley","Atticus","Crew","Brantley","Colin","Dallas",
    "Walter","Brady","Callum","Ronan","Hendrix","Jorge","Tobias","Clayton","Emerson","Damien","Zayn","Malcolm","Kayson","Bodhi","Bryan","Aidan","Cohen",
    "Brian","Cayden","Andre","Niko","Maximiliano","Zander","Khalil","Rory","Francisco","Cruz","Kobe","Reid","Daxton","Derek","Martin","Jensen","Karson",
    "Tate","Muhammad","Jaden","Joaquin","Josue","Gideon","Dante","Cody","Bradley","Orion","Spencer","Angelo","Erick","Jaylen","Julius","Manuel","Ellis",
    "Colson","Cairo","Gunner","Wade","Chance","Odin","Anderson","Kane","Raymond","Cristian","Aziel","Prince","Ezequiel","Jake","Otto","Eduardo","Rylan",
    "Ali","Cade","Stephen","Ari","Kameron","Dakota","Warren","Ricardo","Killian","Mario","Romeo","Cyrus","Ismael","Russell","Tyson","Edwin","Desmond",
    "Nasir","Remy","Tanner","Fernando","Hector","Titus","Lawson","Sean","Kyle","Elian","Corbin","Bowen","Wilder","Armani","Royal","Stetson","Briggs",
    "Sullivan","Leonel","Callan","Finnegan","Jay","Zayne","Marshall","Kade","Travis","Sterling","Raiden","Sergio","Tatum","Cesar","Zyaire","Milan",
    "Devin","Gianni","Kamari","Royce","Malik","Jared","Franklin","Clark","Noel","Marco","Archie","Apollo","Pablo","Garrett","Oakley","Memphis",
    "Quinn","Onyx","Alijah","Baylor","Edgar","Nehemiah","Winston","Major","Rhys","Forrest","Jaiden","Reed","Santino","Troy","Caiden","Harvey",
    "Collin","Solomon","Donovan","Damon","Jeffrey","Kason","Sage","Grady","Kendrick","Leland","Luciano","Pedro","Hank","Hugo","Esteban","Johnny",
    "Kashton","Ronin","Ford","Mathias","Porter","Erik","Johnathan","Frank","Tripp","Casey","Fabian","Leonidas","Baker","Matthias","Philip",
    "Jayceon","Kian","Saint","Ibrahim","Jaxton","Augustus","Callen","Trevor","Ruben","Adan","Conor","Dax","Braylen","Kaison","Francis",
    "Kyson","Andy","Lucca","Mack","Peyton","Alexis","Deacon","Kasen","Kamden","Frederick","Princeton","Braylon","Wells","Nikolai","Iker",
    "Bo","Dominick","Moshe","Cassius","Gregory","Lewis","Kieran","Isaias","Seth","Marcos","Omari","Shane","Keegan","Jase","Asa","Sonny",
    "Uriel","Pierce","Jasiah","Eden","Rocco","Banks","Cannon","Denver","Zaiden","Roberto","Shawn","Drew","Emanuel","Kolton","Ayaan","Ares",
    "Conner","Jalen","Alonzo","Enrique","Dalton","Moses","Koda","Bodie","Jamison","Phillip","Zaire","Jonas","Kylo","Moises","Shepherd","Allen","Kenzo","Mohamed",
    "Keanu","Dexter","Conrad","Bruce","Sylas","Soren","Raphael","Rowen","Gunnar","Sutton","Quentin","Jaziel","Emmitt","Makai","Koa","Maximilian","Brixton","Dariel",
    "Zachariah","Roy","Armando","Corey","Saul","Izaiah","Danny","Davis","Ridge","Yusuf","Ariel","Valentino","Jayson","Ronald","Albert","Gerardo","Ryland","Dorian","Drake",
    "Gage","Rodrigo","Hezekiah","Kylan","Boone","Ledger","Santana","Jamari","Jamir","Lawrence","Reece","Kaysen","Shiloh","Arjun","Marcelo","Abram","Benson","Huxley","Nikolas",
    "Zain","Kohen","Samson","Miller","Donald","Finnley","Kannon","Lucian","Watson","Keith","Westin","Tadeo","Sincere","Boston","Axton","Amos","Chandler","Leandro","Raul","Scott",
    "Reign","Alessandro","Camilo","Derrick","Morgan","Julio","Clay","Edison","Jaime","Augustine","Julien","Zeke","Marvin","Bellamy","Landen","Dustin","Jamie","Krew","Kyree",
    "Colter","Johan","Houston","Layton","Quincy","Case","Atreus","Cayson","Aarav","Darius","Harlan","Justice","Abdiel","Layne","Raylan","Arturo","Taylor","Anakin","Ander",
    "Hamza","Otis","Azariah","Leonard","Colby","Duke","Flynn","Trey","Gustavo","Fletcher","Issac","Sam","Trenton","Callahan","Chris","Mohammad","Rayan","Lionel","Bruno",
    "Jaxxon","Zaid","Brycen","Roland","Dillon","Lennon","Ambrose","Rio","Mac","Ahmed","Samir","Yosef","Tru","Creed","Tony","Alden","Aden","Alec","Carmelo","Dario","Marcel",
    "Roger","Ty","Ahmad","Emir","Landyn","Skyler","Mohammed","Dennis","Kareem","Nixon","Rex","Uriah","Lee","Louie","Rayden","Reese","Alberto","Cason","Quinton","Kingsley",
    "Chaim","Alfredo","Mauricio","Caspian","Legacy","Ocean","Ozzy","Briar","Wilson","Forest","Grey","Joziah","Salem","Neil","Remi","Bridger","Harry","Jefferson","Lachlan",
    "Nelson","Casen","Salvador","Magnus","Tommy","Marcellus","Maximo","Jerry","Clyde","Aron","Keaton","Eliam","Lian","Trace","Douglas","Junior","Titan","Cullen","Cillian",
    "Musa","Mylo","Hugh","Tomas","Vincenzo","Westley","Langston","Byron","Kiaan","Loyal","Orlando","Kyro","Amias","Amiri","Jimmy","Vicente","Khari","Brendan","Rey","Ben",
    "Emery","Zyair","Bjorn","Evander","Ramon","Alvin","Ricky","Jagger","Brock","Dakari","Eddie","Blaze","Gatlin","Alonso","Curtis","Kylian","Nathanael","Devon","Wayne",
    "Zakai","Mathew","Rome","Riggs","Aryan","Avi","Hassan","Lochlan","Stanley","Dash","Kaiser","Benicio","Bryant","Talon","Rohan","Wesson","Joe","Noe","Melvin","Vihaan",
    "Zayd","Darren","Enoch","Mitchell","Jedidiah","Brodie","Castiel","Ira","Lance","Guillermo","Thatcher","Ermias","Misael","Jakari","Emory","Mccoy","Rudy","Thaddeus","Valentin",
    "Yehuda","Bode","Madden","Kase","Bear","Boden","Jiraiya","Maurice","Alvaro","Ameer","Demetrius","Eliseo","Kabir","Kellan","Allan","Azrael","Calum","Niklaus","Ray","Damari",
    "Elio","Jon","Leighton","Axl","Dane","Eithan","Eugene","Kenji","Jakob","Colten","Eliel","Nova","Santos","Zahir","Idris","Ishaan","Kole","Korbin","Seven","Alaric","Kellen",
    "Bronson","Franco","Wes","Larry","Mekhi","Jamal","Dilan","Elisha","Brennan","Kace","Van","Felipe","Fisher","Cal","Dior","Judson","Alfonso","Deandre","Rocky","Henrik","Reuben",
    "Anders","Arian","Damir","Jacoby","Khalid","Kye","Mustafa","Jadiel","Stefan","Yousef","Aydin","Jericho","Robin","Wallace","Alistair","Davion","Alfred","Ernesto","Kyng","Everest",
    "Gary","Leroy","Yahir","Braden","Kelvin","Kristian","Adler","Avyaan","Brayan","Jones","Truett","Aries","Joey","Randy","Jaxx","Jesiah","Jovanni","Azriel","Brecken","Harley",
    "Zechariah","Gordon","Jakai","Carl","Graysen","Kylen","Ayan","Branson","Crosby","Dominik","Jabari","Jaxtyn","Kristopher","Ulises","Zyon","Fox","Howard","Salvatore","Turner",
    "Vance","Harlem","Jair","Jakobe","Jeremias","Osiris","Azael","Bowie","Canaan","Elon","Granger","Karsyn","Zavier","Cain","Dangelo","Heath","Yisroel","Gian","Shepard","Harold",
    "Kamdyn","Rene","Rodney","Yaakov","Adrien","Kartier","Cassian","Coleson","Ahmir","Darian","Genesis","Kalel","Agustin","Wylder","Yadiel","Ephraim","Kody","Neo","Ignacio","Osman",
    "Aldo","Abdullah","Cory","Blaine","Dimitri","Khai","Landry","Palmer","Benedict","Leif","Koen","Maxton","Mordechai","Zev","Atharv","Bishop","Blaise","Davian"];
    let contry = ["Afghanistan","Albania","Algeria","Andorra","Angola","AntiguaandBarbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus",
    "Belgium","Belize","Benin","Bhutan","Bolivia","BosniaandHerzegovina","Botswana","Brazil","Brunei","Bulgaria","BurkinaFaso","Burundi","Côted'Ivoire","CaboVerde","Cambodia","Cameroon","Canada",
    "CentralAfricanRepublic","Chad","Chile","China","Colombia","Comoros","Congo(Congo-Brazzaville)","CostaRica","Croatia","Cuba","Cyprus","Czechia(CzechRepublic)","DemocraticRepublicoftheCongo",
    "Denmark","Djibouti","Dominica","DominicanRepublic","Ecuador","Egypt","ElSalvador","EquatorialGuinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia",
    "Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","HolySee","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
    "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
    "Malaysia","Maldives","Mali","Malta","MarshallIslands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar(formerlyBurma)",
    "Namibia","Nauru","Nepal","Netherlands","NewZealand","Nicaragua","Niger","Nigeria","NorthKorea","NorthMacedonia","Norway","Oman","Pakistan","Palau","PalestineState","Panama","PapuaNewGuinea","Paraguay",
    "Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","SaintKittsandNevis","SaintLucia","SaintVincentandtheGrenadines","Samoa","SanMarino","SaoTomeandPrincipe",
    "SaudiArabia","Senegal","Serbia","Seychelles","SierraLeone","Singapore","Slovakia","Slovenia","SolomonIslands","Somalia","SouthAfrica","SouthKorea","SouthSudan","Spain","SriLanka","Sudan",
    "Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","TrinidadandTobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
    "UnitedArabEmirates","UnitedKingdom","UnitedStatesofAmerica","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];


        let anne = (Math.round(Math.random()*(2021-1958)+1958));
        let month = (Math.round(Math.random()*11)+1);
        let day = (Math.round(Math.random()*28)+1);
                let mony = (Math.round(Math.random()*(9-1)*1000+1000))
    let donne ={
        name : nameArray[(Math.round(Math.random()*(nameArray.length-1)))]+" "+nameArray[(Math.round(Math.random()*(nameArray.length-1)))],
        position : jobArray[(Math.round(Math.random()*(jobArray.length-1)))],
        office : contry[(Math.round(Math.random()*contry.length)-1)],
        age:""+(Math.round(Math.random()*(85-18)+18)),
        date:""+anne+"/"+(month<10?"0":"")+month+"/"+(day<10?"0":"")+day,
        salary:""+(mony>=1000?""+(Math.round(Math.random()*8+1))+" ":"")+(mony%1000<100?"0":"")+(mony%1000<10?"0":"")+mony%1000+" 000,00 Ar"
      }



    return (
        donne
    );
};




export const base = 
[{"id":1,"first_name":"Gerhardt","last_name":"Skacel","fr_C":8.5,"fr_bacc":15.0,"fr":16.0,"math_C":7.0,"math_bacc":17.5,"math":12.0},
{"id":2,"first_name":"Jessee","last_name":"Wroughton","fr_C":6.0,"fr_bacc":13.0,"fr":13.5,"math_C":2.5,"math_bacc":5.5,"math":15.0},
{"id":3,"first_name":"Larina","last_name":"Scurman","fr_C":5.5,"fr_bacc":15.5,"fr":1.5,"math_C":14.5,"math_bacc":13.0,"math":4.0},
{"id":4,"first_name":"Theodora","last_name":"Castiblanco","fr_C":17.0,"fr_bacc":12.5,"fr":11.0,"math_C":10.5,"math_bacc":1.5,"math":6.5},
{"id":5,"first_name":"Zachariah","last_name":"Sparrowe","fr_C":11.0,"fr_bacc":15.0,"fr":18.5,"math_C":10.5,"math_bacc":2.0,"math":7.0},
{"id":6,"first_name":"Merrily","last_name":"Wilman","fr_C":13.0,"fr_bacc":12.5,"fr":7.5,"math_C":11.5,"math_bacc":8.5,"math":2.0},
{"id":7,"first_name":"Selina","last_name":"Mileham","fr_C":4.0,"fr_bacc":18.0,"fr":18.0,"math_C":6.5,"math_bacc":1.0,"math":13.5},
{"id":8,"first_name":"Sherlock","last_name":"Lorraway","fr_C":10.5,"fr_bacc":7.5,"fr":11.0,"math_C":12.5,"math_bacc":6.5,"math":18.5},
{"id":9,"first_name":"Federica","last_name":"Huddles","fr_C":2.0,"fr_bacc":7.0,"fr":15.0,"math_C":10.5,"math_bacc":16.5,"math":13.5},
{"id":10,"first_name":"Des","last_name":"Bliben","fr_C":19.0,"fr_bacc":13.5,"fr":6.0,"math_C":12.5,"math_bacc":8.5,"math":11.0},
{"id":11,"first_name":"Jeanna","last_name":"Stendall","fr_C":7.5,"fr_bacc":14.0,"fr":4.0,"math_C":4.5,"math_bacc":11.0,"math":19.0},
{"id":12,"first_name":"Gigi","last_name":"Le Gall","fr_C":16.5,"fr_bacc":6.5,"fr":3.0,"math_C":5.0,"math_bacc":17.0,"math":4.0},
{"id":13,"first_name":"Jerri","last_name":"Delacroix","fr_C":17.0,"fr_bacc":17.5,"fr":15.5,"math_C":6.5,"math_bacc":3.0,"math":8.5},
{"id":14,"first_name":"Gery","last_name":"MacDonough","fr_C":1.5,"fr_bacc":10.5,"fr":1.5,"math_C":1.0,"math_bacc":16.5,"math":13.5},
{"id":15,"first_name":"Antonius","last_name":"Picopp","fr_C":19.0,"fr_bacc":12.5,"fr":2.0,"math_C":11.0,"math_bacc":17.0,"math":6.0},
{"id":16,"first_name":"Rita","last_name":"Cumming","fr_C":19.0,"fr_bacc":12.0,"fr":14.5,"math_C":7.5,"math_bacc":18.5,"math":9.0},
{"id":17,"first_name":"Nita","last_name":"Kinghorne","fr_C":8.0,"fr_bacc":3.0,"fr":15.5,"math_C":16.0,"math_bacc":12.0,"math":18.0},
{"id":18,"first_name":"Armand","last_name":"Pelos","fr_C":5.0,"fr_bacc":16.0,"fr":19.5,"math_C":3.5,"math_bacc":13.5,"math":11.0},
{"id":19,"first_name":"Dino","last_name":"Bendix","fr_C":14.5,"fr_bacc":2.0,"fr":9.0,"math_C":3.0,"math_bacc":7.5,"math":16.0},
{"id":20,"first_name":"Chiquia","last_name":"McGarrell","fr_C":11.0,"fr_bacc":17.5,"fr":5.0,"math_C":4.0,"math_bacc":14.5,"math":16.0},
{"id":21,"first_name":"Godart","last_name":"Duncklee","fr_C":1.5,"fr_bacc":16.0,"fr":8.5,"math_C":19.0,"math_bacc":1.5,"math":8.0},
{"id":22,"first_name":"Clement","last_name":"Lacheze","fr_C":13.0,"fr_bacc":11.5,"fr":7.0,"math_C":17.0,"math_bacc":19.0,"math":6.5},
{"id":23,"first_name":"Filippo","last_name":"Ellwand","fr_C":4.0,"fr_bacc":5.5,"fr":3.5,"math_C":4.5,"math_bacc":10.5,"math":14.5},
{"id":24,"first_name":"Hyatt","last_name":"Peatman","fr_C":1.0,"fr_bacc":18.0,"fr":18.5,"math_C":2.0,"math_bacc":2.5,"math":2.5},
{"id":25,"first_name":"Trudi","last_name":"Latty","fr_C":14.5,"fr_bacc":8.0,"fr":2.0,"math_C":20.0,"math_bacc":14.5,"math":9.5},
{"id":26,"first_name":"Bondy","last_name":"Silbermann","fr_C":12.0,"fr_bacc":3.5,"fr":8.0,"math_C":13.0,"math_bacc":6.0,"math":19.5},
{"id":27,"first_name":"Catie","last_name":"Piscot","fr_C":15.0,"fr_bacc":18.0,"fr":11.0,"math_C":18.5,"math_bacc":2.0,"math":9.0},
{"id":28,"first_name":"Culley","last_name":"Falkingham","fr_C":1.5,"fr_bacc":12.5,"fr":6.5,"math_C":1.5,"math_bacc":4.0,"math":3.5},
{"id":29,"first_name":"Gerry","last_name":"Latty","fr_C":11.0,"fr_bacc":12.0,"fr":4.5,"math_C":17.0,"math_bacc":15.0,"math":12.5},
{"id":30,"first_name":"Rudd","last_name":"Soppit","fr_C":7.0,"fr_bacc":15.5,"fr":18.0,"math_C":6.0,"math_bacc":9.5,"math":13.5},
{"id":31,"first_name":"Pattie","last_name":"Vercruysse","fr_C":3.0,"fr_bacc":13.0,"fr":10.0,"math_C":10.0,"math_bacc":18.5,"math":9.5},
{"id":32,"first_name":"Leeann","last_name":"Milton","fr_C":10.5,"fr_bacc":8.5,"fr":9.5,"math_C":11.5,"math_bacc":10.5,"math":4.5},
{"id":33,"first_name":"Sandi","last_name":"Raine","fr_C":8.5,"fr_bacc":9.5,"fr":9.0,"math_C":8.5,"math_bacc":10.5,"math":6.0},
{"id":34,"first_name":"Derrek","last_name":"Jirak","fr_C":8.5,"fr_bacc":7.0,"fr":12.5,"math_C":5.5,"math_bacc":15.0,"math":17.0},
{"id":35,"first_name":"Lazarus","last_name":"De Caville","fr_C":6.5,"fr_bacc":2.0,"fr":4.5,"math_C":2.5,"math_bacc":12.0,"math":10.5},
{"id":36,"first_name":"Latrina","last_name":"Clawley","fr_C":1.5,"fr_bacc":10.0,"fr":10.5,"math_C":7.5,"math_bacc":6.0,"math":6.5},
{"id":37,"first_name":"Maryanna","last_name":"Coveley","fr_C":16.0,"fr_bacc":15.0,"fr":12.5,"math_C":4.5,"math_bacc":3.0,"math":15.5},
{"id":38,"first_name":"Elli","last_name":"Iiannoni","fr_C":3.0,"fr_bacc":9.0,"fr":19.0,"math_C":17.0,"math_bacc":19.0,"math":12.0},
{"id":39,"first_name":"Fanchon","last_name":"Hoffner","fr_C":12.5,"fr_bacc":7.0,"fr":10.0,"math_C":10.0,"math_bacc":4.5,"math":2.5},
{"id":40,"first_name":"Anette","last_name":"Wardroper","fr_C":2.0,"fr_bacc":13.0,"fr":6.5,"math_C":1.0,"math_bacc":12.5,"math":5.5},
{"id":41,"first_name":"Travis","last_name":"Rouch","fr_C":15.5,"fr_bacc":1.5,"fr":19.0,"math_C":10.0,"math_bacc":5.0,"math":7.0},
{"id":42,"first_name":"Lydon","last_name":"Spraggs","fr_C":4.5,"fr_bacc":15.5,"fr":19.0,"math_C":4.5,"math_bacc":5.0,"math":11.0},
{"id":43,"first_name":"Orton","last_name":"Dahlman","fr_C":4.0,"fr_bacc":16.0,"fr":16.0,"math_C":17.5,"math_bacc":8.5,"math":17.0},
{"id":44,"first_name":"Elfreda","last_name":"Hatherley","fr_C":5.5,"fr_bacc":2.0,"fr":14.5,"math_C":2.5,"math_bacc":18.5,"math":6.5},
{"id":45,"first_name":"Vivianna","last_name":"Sturley","fr_C":11.5,"fr_bacc":7.5,"fr":11.5,"math_C":19.5,"math_bacc":19.5,"math":19.0},
{"id":46,"first_name":"Ebba","last_name":"Delatour","fr_C":19.5,"fr_bacc":17.0,"fr":17.5,"math_C":19.5,"math_bacc":3.0,"math":6.5},
{"id":47,"first_name":"Giraud","last_name":"Corradi","fr_C":15.5,"fr_bacc":12.5,"fr":6.0,"math_C":4.5,"math_bacc":3.5,"math":11.0},
{"id":48,"first_name":"Monica","last_name":"Stormonth","fr_C":15.0,"fr_bacc":16.0,"fr":6.0,"math_C":13.5,"math_bacc":7.0,"math":9.5},
{"id":49,"first_name":"Callie","last_name":"Dawes","fr_C":16.0,"fr_bacc":11.0,"fr":19.0,"math_C":13.0,"math_bacc":13.0,"math":17.0},
{"id":50,"first_name":"Karmen","last_name":"Gitthouse","fr_C":10.0,"fr_bacc":4.5,"fr":5.0,"math_C":12.0,"math_bacc":6.0,"math":10.5},
{"id":51,"first_name":"Felic","last_name":"Garard","fr_C":4.5,"fr_bacc":5.5,"fr":1.0,"math_C":7.0,"math_bacc":3.0,"math":10.5},
{"id":52,"first_name":"Abagail","last_name":"Tootin","fr_C":6.0,"fr_bacc":6.5,"fr":18.0,"math_C":17.0,"math_bacc":13.5,"math":19.0},
{"id":53,"first_name":"Jeremias","last_name":"Procter","fr_C":1.0,"fr_bacc":12.5,"fr":14.5,"math_C":17.5,"math_bacc":15.5,"math":4.5},
{"id":54,"first_name":"Constancy","last_name":"Imos","fr_C":7.5,"fr_bacc":14.5,"fr":13.0,"math_C":2.0,"math_bacc":7.5,"math":16.5},
{"id":55,"first_name":"Gerome","last_name":"Samples","fr_C":18.0,"fr_bacc":1.0,"fr":18.0,"math_C":1.0,"math_bacc":5.5,"math":5.0},
{"id":56,"first_name":"Cecilio","last_name":"Dominec","fr_C":10.0,"fr_bacc":19.5,"fr":6.0,"math_C":17.0,"math_bacc":14.0,"math":14.0},
{"id":57,"first_name":"Deidre","last_name":"Wheeler","fr_C":13.5,"fr_bacc":18.5,"fr":10.0,"math_C":5.5,"math_bacc":6.0,"math":6.0},
{"id":58,"first_name":"Berri","last_name":"Hachette","fr_C":19.5,"fr_bacc":7.0,"fr":16.0,"math_C":13.5,"math_bacc":15.0,"math":2.0},
{"id":59,"first_name":"Glynn","last_name":"Handley","fr_C":19.5,"fr_bacc":19.5,"fr":7.0,"math_C":8.5,"math_bacc":11.0,"math":16.0},
{"id":60,"first_name":"Charmaine","last_name":"Drewitt","fr_C":10.0,"fr_bacc":7.0,"fr":2.5,"math_C":12.0,"math_bacc":15.5,"math":18.0},
{"id":61,"first_name":"Fabio","last_name":"Chopy","fr_C":15.5,"fr_bacc":2.0,"fr":15.0,"math_C":12.0,"math_bacc":9.0,"math":8.5},
{"id":62,"first_name":"Rutter","last_name":"Craigmile","fr_C":10.5,"fr_bacc":7.0,"fr":1.0,"math_C":8.5,"math_bacc":3.0,"math":2.5},
{"id":63,"first_name":"Shurlocke","last_name":"Iredell","fr_C":10.5,"fr_bacc":7.0,"fr":11.5,"math_C":3.5,"math_bacc":5.5,"math":6.0},
{"id":64,"first_name":"Denny","last_name":"Dimnage","fr_C":13.0,"fr_bacc":14.0,"fr":15.0,"math_C":16.0,"math_bacc":14.5,"math":6.0},
{"id":65,"first_name":"Avrom","last_name":"Haselgrove","fr_C":12.5,"fr_bacc":4.0,"fr":14.5,"math_C":16.5,"math_bacc":13.0,"math":8.0},
{"id":66,"first_name":"Raquela","last_name":"Bakewell","fr_C":6.0,"fr_bacc":15.5,"fr":10.5,"math_C":9.0,"math_bacc":13.0,"math":19.0},
{"id":67,"first_name":"Briggs","last_name":"Tulleth","fr_C":4.5,"fr_bacc":17.0,"fr":3.0,"math_C":7.0,"math_bacc":11.0,"math":14.0},
{"id":68,"first_name":"Gris","last_name":"Ellsbury","fr_C":16.0,"fr_bacc":11.0,"fr":16.5,"math_C":14.0,"math_bacc":3.5,"math":6.5},
{"id":69,"first_name":"Major","last_name":"Gunson","fr_C":8.0,"fr_bacc":11.5,"fr":3.5,"math_C":18.5,"math_bacc":13.5,"math":7.5},
{"id":70,"first_name":"Gabie","last_name":"Condict","fr_C":19.0,"fr_bacc":2.5,"fr":2.5,"math_C":4.5,"math_bacc":11.5,"math":10.5},
{"id":71,"first_name":"Karrie","last_name":"Guiso","fr_C":8.5,"fr_bacc":12.0,"fr":10.0,"math_C":4.0,"math_bacc":1.0,"math":7.5},
{"id":72,"first_name":"Alexei","last_name":"Skelhorne","fr_C":18.5,"fr_bacc":4.0,"fr":8.5,"math_C":17.0,"math_bacc":8.0,"math":1.0},
{"id":73,"first_name":"Odessa","last_name":"Eydel","fr_C":18.5,"fr_bacc":9.5,"fr":11.5,"math_C":15.5,"math_bacc":10.0,"math":18.5},
{"id":74,"first_name":"Kamillah","last_name":"Serjent","fr_C":15.5,"fr_bacc":15.0,"fr":3.0,"math_C":7.0,"math_bacc":16.5,"math":2.0},
{"id":75,"first_name":"Ralph","last_name":"Freak","fr_C":3.5,"fr_bacc":5.5,"fr":19.5,"math_C":16.5,"math_bacc":9.5,"math":16.0},
{"id":76,"first_name":"Michele","last_name":"Massot","fr_C":14.0,"fr_bacc":6.5,"fr":4.5,"math_C":2.0,"math_bacc":17.5,"math":13.0},
{"id":77,"first_name":"Peter","last_name":"Lancashire","fr_C":7.5,"fr_bacc":5.5,"fr":2.0,"math_C":6.0,"math_bacc":1.5,"math":3.5},
{"id":78,"first_name":"Leonelle","last_name":"McPhilip","fr_C":12.0,"fr_bacc":4.0,"fr":19.5,"math_C":20.0,"math_bacc":7.5,"math":3.5},
{"id":79,"first_name":"Durward","last_name":"Sieb","fr_C":17.0,"fr_bacc":8.5,"fr":10.5,"math_C":7.0,"math_bacc":14.5,"math":4.0},
{"id":80,"first_name":"Zitella","last_name":"Birbeck","fr_C":3.5,"fr_bacc":9.5,"fr":16.5,"math_C":6.5,"math_bacc":18.5,"math":18.5},
{"id":81,"first_name":"Arman","last_name":"Basnall","fr_C":6.5,"fr_bacc":15.0,"fr":10.5,"math_C":11.5,"math_bacc":1.5,"math":12.0},
{"id":82,"first_name":"Verna","last_name":"Saffle","fr_C":16.5,"fr_bacc":14.0,"fr":3.0,"math_C":19.0,"math_bacc":3.5,"math":11.5},
{"id":83,"first_name":"Bink","last_name":"Samett","fr_C":8.0,"fr_bacc":16.0,"fr":13.5,"math_C":18.5,"math_bacc":6.0,"math":18.5},
{"id":84,"first_name":"Aylmer","last_name":"Dahlback","fr_C":1.5,"fr_bacc":15.0,"fr":14.5,"math_C":2.5,"math_bacc":8.5,"math":17.5},
{"id":85,"first_name":"Waring","last_name":"Pughsley","fr_C":6.0,"fr_bacc":10.5,"fr":7.0,"math_C":11.0,"math_bacc":7.0,"math":5.5},
{"id":86,"first_name":"Lionel","last_name":"Joao","fr_C":16.5,"fr_bacc":19.0,"fr":14.0,"math_C":4.0,"math_bacc":6.0,"math":12.5},
{"id":87,"first_name":"Imogen","last_name":"Merida","fr_C":10.0,"fr_bacc":18.0,"fr":17.5,"math_C":14.0,"math_bacc":8.0,"math":9.5},
{"id":88,"first_name":"Vern","last_name":"Landreth","fr_C":4.0,"fr_bacc":12.5,"fr":16.0,"math_C":12.5,"math_bacc":4.0,"math":13.0},
{"id":89,"first_name":"Allie","last_name":"Ricciardiello","fr_C":7.5,"fr_bacc":16.5,"fr":10.5,"math_C":3.0,"math_bacc":12.0,"math":3.0},
{"id":90,"first_name":"Hanna","last_name":"Blagdon","fr_C":9.5,"fr_bacc":9.0,"fr":18.5,"math_C":16.0,"math_bacc":16.0,"math":19.0},
{"id":91,"first_name":"Percy","last_name":"Woodlands","fr_C":18.0,"fr_bacc":12.0,"fr":6.0,"math_C":4.0,"math_bacc":10.0,"math":13.5},
{"id":92,"first_name":"Anatollo","last_name":"Nowell","fr_C":13.5,"fr_bacc":9.5,"fr":11.5,"math_C":19.0,"math_bacc":18.5,"math":9.0},
{"id":93,"first_name":"Corey","last_name":"Laing","fr_C":9.0,"fr_bacc":14.0,"fr":7.5,"math_C":1.5,"math_bacc":2.5,"math":13.0},
{"id":94,"first_name":"Binny","last_name":"Kinson","fr_C":7.5,"fr_bacc":4.5,"fr":2.5,"math_C":9.5,"math_bacc":17.5,"math":4.5},
{"id":95,"first_name":"Hill","last_name":"Whitechurch","fr_C":19.5,"fr_bacc":18.5,"fr":3.5,"math_C":2.0,"math_bacc":15.0,"math":3.5},
{"id":96,"first_name":"Tades","last_name":"Janks","fr_C":14.5,"fr_bacc":18.0,"fr":9.5,"math_C":8.5,"math_bacc":4.0,"math":1.0},
{"id":97,"first_name":"Lisa","last_name":"Petegrew","fr_C":16.5,"fr_bacc":19.0,"fr":9.0,"math_C":18.5,"math_bacc":11.0,"math":6.5},
{"id":98,"first_name":"Bernadine","last_name":"Lehemann","fr_C":8.5,"fr_bacc":8.5,"fr":15.5,"math_C":5.5,"math_bacc":7.5,"math":19.5},
{"id":99,"first_name":"Wenda","last_name":"Craighill","fr_C":14.0,"fr_bacc":17.5,"fr":12.5,"math_C":1.0,"math_bacc":15.0,"math":15.0},
{"id":100,"first_name":"Udall","last_name":"Verecker","fr_C":10.5,"fr_bacc":2.0,"fr":12.5,"math_C":9.5,"math_bacc":2.0,"math":10.5}];

export const database:dataReal[]=[{            
    "id":base[0].id,
    "first_name":base[0].first_name,
    "last_name":base[0].last_name,
    "fr_C":base[0].fr_C,
    "fr_bacc":base[0].fr_bacc,
    "fr":base[0].fr,
    "math_C":base[0].math_C,
    "math_bacc":base[0].math_bacc,
    "math":base[0].math,
    "status":base[0].fr+base[0].math<20?"Recalé":"Admis"
}];

const calcue = (fr_C:number,fr_bacc:number,math_C:number,math_bacc:number,min:number,minMath:number,minl:number, )=>{
    const moy = (fr_C + fr_bacc + math_C + math_bacc)/4;
    const moyM = (math_C + math_bacc)/2;
    if ((moy>=min)&&(moyM>=minMath)) {
        return "Admis";
    }else if ((moy>=minl)&&(moyM>=minMath)) {
        return "List d'attente";
    }else{
        return"Recalé";
    }
    
}


base.map(
    (data, idx) => {
        if (idx!=0) {
            const d:dataReal={
                "id":data.id,
                "first_name":data.first_name,
                "last_name":data.last_name,
                "fr_C":data.fr_C,
                "fr_bacc":data.fr_bacc,
                "fr":(data.fr_C+data.fr_bacc)/2,
                "math_C":data.math_C,
                "math_bacc":data.math_bacc,
                "math":(data.math_C+data.math_bacc)/2,
                "status":calcue(data.fr_C,data.fr_bacc,data.math_C,data.math_bacc,12,7,9)
            };
            database.push(d);
        }
    }
)

export const listSession:session[]=[
    {
        "id_concours": 1,
        "session": "g1 2022",
        "min_admission": 11,
        "min_liste_attente": 9,
        "min_math": 7
    },
    {
        "id_concours": 2,
        "session": "g2 2022",
        "min_admission": 12,
        "min_liste_attente": 9,
        "min_math": 7
    },
    {
        "id_concours": 3,
        "session": "g3 2022",
        "min_admission": 13,
        "min_liste_attente": 10,
        "min_math": 8
    },
]

export default DonnerTable;