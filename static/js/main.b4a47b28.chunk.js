(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(18),r=n.n(o),s=(n(24),n(2)),c=n(3),l=n(5),u=n(4),d=(n(25),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={showDetails:!1},e.handleShowDetails=function(){e.setState({showDetails:!0})},e.handleHideDetails=function(){e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return this.state.showDetails?i.a.createElement("div",{className:"Event"},i.a.createElement("div",{className:"eventCard__details"},i.a.createElement("ul",null,i.a.createElement("li",{className:"event-time__details event-date"},t.local_time," - ",t.local_date),i.a.createElement("li",{className:"event-name__details"},t.name),i.a.createElement("li",{className:"event-group__details"},t.group.name),i.a.createElement("li",{className:"event-rsvp__details"},t.yes_rsvp_count," are going"),i.a.createElement("li",{className:"event-address__details"},t.address_1,i.a.createElement("br",null),t.city,", ",t.state," ",t.zip),i.a.createElement("li",{className:"event-description__details"},t.description),i.a.createElement("li",{className:"event-link__details"},i.a.createElement("a",{href:t.link}," Event Link"))),i.a.createElement("button",{className:"hide-detail-button",onClick:function(){return e.handleHideDetails()}},"Less Details"))):i.a.createElement("div",{className:"Event"},i.a.createElement("div",{className:"eventCard"},i.a.createElement("ul",null,i.a.createElement("li",{className:"event-time event-date"},t.local_time," - ",t.local_date),i.a.createElement("li",{className:"event-name"},t.name),i.a.createElement("li",{className:"event-group"},t.group.name),i.a.createElement("li",{className:"event-rsvp"},t.yes_rsvp_count," are going")),i.a.createElement("button",{className:"show-detail-button",onClick:function(){return e.handleShowDetails()}},"Details")))}}]),n}(a.Component)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d,{event:e}))})))}}]),n}(a.Component),p=n(6),_=n.n(p),h=n(7),y=[{created:1593325189e3,duration:36e5,id:"cnhttrybckbrb",name:"The Purpose of Life in Buddhism",date_in_series_pattern:!1,status:"upcoming",time:15946488e5,local_date:"2020-07-13",local_time:"16:00",updated:1593325189e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,is_online_event:!1,group:{created:1449538782e3,name:"M\xfcnchen Meanings of Life in Buddhism Meetup",id:19192295,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Meanings-of-Life-in-Buddhism-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-Meanings-of-Life-in-Buddhism-Meetup/events/cnhttrybckbrb/",description:"desc1",visibility:"public",member_pay_fee:!1},{created:1573833508e3,duration:7056e5,id:"266491810",name:"The New Man \u2013 Das M\xe4nnerabenteuer [Iron John]",rsvp_limit:12,date_in_series_pattern:!1,status:"upcoming",time:15993e8,local_date:"2020-09-05",local_time:"12:00",updated:1573833508e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,is_online_event:!1,group:{created:144092466e4,name:"No More Mr. Nice Guy M\xe4nnergruppe M\xfcnchen",id:18881708,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"No-More-Mr-Nice-Guy-Muenchen",who:"M\xe4nner",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/No-More-Mr-Nice-Guy-Muenchen/events/266491810/",description:"desc2",visibility:"public",member_pay_fee:!1},{created:158046574e4,duration:72e5,id:"wtwxtrybclbfb",name:"Muenchner Brainstormers Club ONLINE",date_in_series_pattern:!1,status:"upcoming",time:15964749e5,local_date:"2020-08-03",local_time:"19:15",updated:1594337103e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26903444,name:"Online",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Online Adresse noch nicht verf\xfcgbar",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1444592791e3,name:"Toastmasters Clubs in and around Munich",id:19017360,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Toastmasters-Clubs-in-and-around-Munich",who:"Toastmasters",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Toastmasters-Clubs-in-and-around-Munich/events/wtwxtrybclbfb/",description:"desc 3",how_to_find_us:"Bitte link per e-mail anfragen an: VP-PR@munich-brainstormers.de",visibility:"public",member_pay_fee:!1},{created:1580296762e3,duration:72e5,id:"tsjmnrybckbdc",name:"Restaurant hopping",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:15954372e5,local_date:"2020-07-22",local_time:"19:00",updated:1580296762e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:15,is_online_event:!1,group:{created:1578072802e3,name:"Foodtour - Foodies are welcome to hop through restaurants",id:33160683,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Foodtour-Foodies-are-welcome-to-hop-through-restaurants",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Foodtour-Foodies-are-welcome-to-hop-through-restaurants/events/tsjmnrybckbdc/",description:"<p>If you cannot attend, please opt out so others get a chance to meetup.</p> ",visibility:"public",member_pay_fee:!1},{created:1592159853e3,duration:72e5,id:"271294734",name:"The Importance of Being Earnest - Oscar Wilde",rsvp_limit:12,date_in_series_pattern:!1,status:"upcoming",time:1594746e6,local_date:"2020-07-14",local_time:"19:00",updated:1592159853e3,utc_offset:72e5,waitlist_count:10,yes_rsvp_count:12,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Classic-Literature-for-the-Dramatically-Stunted/events/271294734/",description:"desc5",visibility:"public",member_pay_fee:!1},{created:1592158899e3,duration:72e5,id:"271294595",name:"Ulysses (Chps. 9 - 14) - James Joyce",date_in_series_pattern:!1,status:"upcoming",time:15965604e5,local_date:"2020-08-04",local_time:"19:00",updated:1592161844e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:10,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Classic-Literature-for-the-Dramatically-Stunted/events/271294595/",description:"desc6",visibility:"public",member_pay_fee:!1},{created:1593325261e3,duration:36e5,id:"271576869",name:"The Purpose of Life in Buddhism",date_in_series_pattern:!1,status:"upcoming",time:15956676e5,local_date:"2020-07-25",local_time:"11:00",updated:1593325261e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,is_online_event:!1,group:{created:1449538782e3,name:"M\xfcnchen Meanings of Life in Buddhism Meetup",id:19192295,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Meanings-of-Life-in-Buddhism-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-Meanings-of-Life-in-Buddhism-Meetup/events/271576869/",description:"desc7",visibility:"public",member_pay_fee:!1},{created:1594303649e3,duration:54e5,id:"271817470",name:"FREE MEDITATION IN THE PARK",date_in_series_pattern:!1,status:"upcoming",time:1595007e6,local_date:"2020-07-17",local_time:"19:30",updated:1594303649e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,venue:{id:26931492,name:"Park hinter St. Nikolai am Gasteig",lat:48.133052825927734,lon:11.590484619140625,repinned:!0,address_1:"Innere-Wiener-Str. 1",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/271817470/",description:"desc8",visibility:"public",member_pay_fee:!1},{created:1594134285e3,duration:54e5,id:"271773151",name:"Free webinar: financial planning for self-employed expats in Germany",date_in_series_pattern:!1,status:"upcoming",time:15950736e5,local_date:"2020-07-18",local_time:"14:00",updated:1594134285e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:15,is_online_event:!1,group:{created:1453714882e3,name:"Expat in the City - Munich",id:19431229,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Expat-in-the-City-Munich",who:"Expats in the City",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Expat-in-the-City-Munich/events/271773151/",description:"desc10",visibility:"public",member_pay_fee:!1},{created:1575159891e3,duration:72e5,id:"266858185",name:"Cameroon: Save the Date",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:16005276e5,local_date:"2020-09-19",local_time:"17:00",updated:1575159891e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:6,is_online_event:!1,group:{created:1518648998e3,name:"Munich Meets African Literature",id:27524394,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Meets-African-Literature",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Meets-African-Literature/events/266858185/",description:"<p>TBD</p> ",visibility:"public",member_pay_fee:!1},{created:1592331633e3,duration:54e5,id:"zsxjtrybckbrb",name:"Young Generation - Free Meditation - Sahaja Yoga Center RE-OPENED!",date_in_series_pattern:!1,status:"upcoming",time:15946614e5,local_date:"2020-07-13",local_time:"19:30",updated:1592331633e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,venue:{id:26353279,name:"Sahaja Yoga Zentrum M\xfcnchen",lat:48.13126754760742,lon:11.589075088500977,repinned:!0,address_1:"Am Lilienberg 2a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/zsxjtrybckbrb/",description:"desc10",how_to_find_us:"S-Bahn Rosenheimerplatz, gegen\xfcber Gasteig",visibility:"public",member_pay_fee:!1},{created:1581832065e3,duration:36e5,id:"frsfprybckbsb",name:"Let's learn the meaning of life in Buddhism",date_in_series_pattern:!1,status:"upcoming",time:15947244e5,local_date:"2020-07-14",local_time:"13:00",updated:1581832066e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,is_online_event:!1,group:{created:1449538782e3,name:"M\xfcnchen Meanings of Life in Buddhism Meetup",id:19192295,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Meanings-of-Life-in-Buddhism-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-Meanings-of-Life-in-Buddhism-Meetup/events/frsfprybckbsb/",description:"desc11",visibility:"public",member_pay_fee:!1},{created:1575159818e3,duration:72e5,id:"266858167",name:"Uganda: Kintu by Jennifer Nansubuga Makumbi",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:15981084e5,local_date:"2020-08-22",local_time:"17:00",updated:1593297825e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:11,is_online_event:!1,group:{created:1518648998e3,name:"Munich Meets African Literature",id:27524394,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Meets-African-Literature",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Meets-African-Literature/events/266858167/",description:"desc12",visibility:"public",member_pay_fee:!1},{created:1590228304e3,duration:72e5,id:"270827478",name:"Clockwork orange : Anthony Burgess",date_in_series_pattern:!1,status:"upcoming",time:15949197e5,local_date:"2020-07-16",local_time:"19:15",updated:1590248467e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:11,is_online_event:!1,group:{created:1503946106e3,name:"One Dark and Stormy Night : Book Club",id:25682270,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Dark-And-Stormy-Night",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Dark-And-Stormy-Night/events/270827478/",description:"<p>Before summer holidays really get going - let\u2019s do another Classic \u201cshould-have-already-read\u201d one \ud83d\ude1c.</p> ",visibility:"public",member_pay_fee:!1},{created:1594197118e3,duration:108e5,id:"271790209",name:"play board games",rsvp_limit:12,date_in_series_pattern:!1,status:"upcoming",time:15945696e5,local_date:"2020-07-12",local_time:"18:00",updated:159419963e4,utc_offset:72e5,waitlist_count:9,yes_rsvp_count:12,venue:{id:26947718,name:"Biergarten & Restaurant am Chinesischen Turm",lat:48.151973724365234,lon:11.592218399047852,repinned:!1,address_1:"Englischer Garten 3 ",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1493414929e3,name:"Munich Social Gaming",id:23474017,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Social-Gaming",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Social-Gaming/events/271790209/",description:"<p>Hi all,</p> <p>let's test a new location, a biergarten, to play Uno!, Coup, Dodelido, Codenames, Saboteur and whatever you bring. Looking forward to play with you!</p> <p>Cheers<br/>Evgeniy</p> ",visibility:"public",member_pay_fee:!1},{created:1593678452e3,duration:81e5,id:"271666212",name:"desc13",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15952599e5,local_date:"2020-07-20",local_time:"17:45",updated:1593678632e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:17,venue:{id:26904559,name:"Leadership Events Zoom-Meeting",lat:48.13512420654297,lon:11.58198070526123,repinned:!0,address_1:"Virtuell",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1510684582e3,name:"Leadership Events - M\xfcnchen",id:26598849,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Leadership-Events-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Leadership-Events-Munchen/events/271666212/",description:"desc14",how_to_find_us:"Die angemeldeten Teilnehmer erhalten am Veranstaltungstag den Link via Meetup zugesandt.",visibility:"public",member_pay_fee:!1},{created:1594113185e3,duration:144e5,id:"271768516",name:"Cashflow M\u016bnchen ",date_in_series_pattern:!1,status:"upcoming",time:16004448e5,local_date:"2020-09-18",local_time:"18:00",updated:1594113185e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,is_online_event:!1,group:{created:158168661e4,name:"Cashflow Club in M\xfcnchen",id:33345348,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"meetup-group-OlEUrOtX",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/meetup-group-OlEUrOtX/events/271768516/",visibility:"public",member_pay_fee:!1},{created:1592159336e3,duration:72e5,id:"271294652",name:"Ulysses (Chps. 15 - 18 + Overall) - James Joyce",date_in_series_pattern:!1,status:"upcoming",time:16020036e5,local_date:"2020-10-06",local_time:"19:00",updated:1592161928e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:7,is_online_event:!1,group:{created:1520326534e3,name:"The Classic-Novels-You-Should-Have-Read-Already Bookclub",id:27741411,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Classic-Literature-for-the-Dramatically-Stunted",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Classic-Literature-for-the-Dramatically-Stunted/events/271294652/",description:"desc15",visibility:"public",member_pay_fee:!1},{created:1594310892e3,duration:54e5,id:"271819471",name:"Introduction to NLP for everyone. A short lyrics analysis",date_in_series_pattern:!1,status:"upcoming",time:15947388e5,local_date:"2020-07-14",local_time:"17:00",updated:1594324311e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:15,is_online_event:!1,group:{created:1456306392e3,name:"Artificial Intelligence & Chatbots by Technology Messenger",id:19618152,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"TechMeMunich",who:"Technology visionaries",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/TechMeMunich/events/271819471/",description:"desc16",visibility:"public",member_pay_fee:!1},{created:1566885214e3,duration:72e5,id:"264333822",name:"Mystery of the Blue Train : Agatha Christie",date_in_series_pattern:!1,status:"upcoming",time:15973353e5,local_date:"2020-08-13",local_time:"18:15",updated:1590248275e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:11,is_online_event:!1,group:{created:1503946106e3,name:"One Dark and Stormy Night : Book Club",id:25682270,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Dark-And-Stormy-Night",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Dark-And-Stormy-Night/events/264333822/",description:"<p>Let\u2019s do a fun Agatha Christie for the depths of summer :)</p> <p>\u201cYou could, perhaps, love a thief, Mademoiselle, but not a murderer!\u201d \u2014 Poirot</p> ",visibility:"public",member_pay_fee:!1}],v=n(8),f=n.n(v);function g(e){return b.apply(this,arguments)}function b(){return(b=Object(h.a)(_.a.mark((function e(t){var n,a,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,E();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,f.a.get(a);case 9:return i=e.sent,e.abrupt("return",i.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return M.apply(this,arguments)}function M(){return(M=Object(h.a)(_.a.mark((function e(t,n){var a,i,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",y);case 2:return e.next=4,E();case 4:if(!(a=e.sent)){e.next=12;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+a,t&&n&&(i+="&lat="+t+"&lon="+n),e.next=10,f.a.get(i);case 10:return o=e.sent,e.abrupt("return",o.data.events);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?k("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=jtinvs4fb0ph7l8vsdm281mvr7&response_type=code&redirect_uri=https://kirby5253.github.io/meetup/",null)}var n=localStorage.getItem("last-saved-time");return e&&Date.now()-n<36e5?e:k("renew",localStorage.getItem("refresh_token"))}function k(e,t){return S.apply(this,arguments)}function S(){return(S=Object(h.a)(_.a.mark((function e(t,n){var a,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://hjb8eyy2cg.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://hjb8eyy2cg.execute-api.us-east-1.amazonaws.com/dev/api/"+n),e.next=3,f.a.get(a);case 3:return i=e.sent,localStorage.setItem("access_token",i.data.access_token),localStorage.setItem("refresh_token",i.data.refresh_token),localStorage.setItem("last-saved-time",Date.now()),e.abrupt("return",i.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),g(n).then((function(t){return e.setState({suggestions:t})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"CitySearch"},i.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),i.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return i.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={eventsNumber:"32"},e.handleInputChanged=function(t){var n=t.target.value;e.setState({eventsNumber:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"numberOfEvents"},"Show ",i.a.createElement("input",{type:"number",className:"showEventsNumber",value:this.state.eventsNumber,onChange:this.handleInputChanged})," Events")}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={events:[]},e.updateEvents=function(t,n){w(t,n).then((function(t){return e.setState({events:t})}))},e}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(z,{updateEvents:this.updateEvents}),i.a.createElement(C,null),i.a.createElement(m,{events:this.state.events}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4a47b28.chunk.js.map