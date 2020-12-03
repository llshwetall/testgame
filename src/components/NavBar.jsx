import React, { Component } from 'react';

class NavBar extends Component {

    state={
        news:[
          "World Death Rate Holding Steady at 100 Percent ",
          "Margaret Thatcher: Egg-throwing contest planned at the unveiling of a statue",
          "CIA Realizes It’s Been Using Black Highlighters All These Years ",
          "Carrie Lam: Hong Kong's leader says she has to keep piles of cash at home",
          "Kitten Thinks of Nothing But Murder All Day ",
          "Makers of grow-your-own human steaks say meal kit is not ‘technically’ cannibalism",
          "Russian man dies after posing for photo with hand grenade",
          "Local Man Passionate Defender Of What He Imagines Constitution To Be ",
          "Trump’s team caught on hot mic discussing Giuliani’s hair dye ‘dripping down his face’",
          "Texas boy wins first place in national mullet championship",
          "God Answers Prayers of Paralyzed Little Boy: ‘No,’ Says God ",
          "Zoo Separates 5 Parrots After the Birds Were Caught Encouraging Each Other to Swear At Guests",
          "Activists Build Facial Recognition to ID Cops Who Hide Their Badges",
          "Archaeological Dig Uncovers Ancient Race Of Skeleton People  ",
          "42 foodpanda Riders Send The Same Order To 7-Year-Old's Home Due To App Glitch",
          "Maruti Suzuki recalls Maruti-800 Due To Fact That Owners Really Should Have Bought Something New By Now ",
          "People Are Leaving 1-Star Reviews Of Scented Candles, Seemingly Unaware They Just Have Covid",
          "Man With No Real-Life Career Goals Knows Exact Job He'd Want In The Harry Potter Universe ",
          "Mike Tyson eats ear off Roy Jones Jr. cake ahead of exhibition bout ",
          "Miracle Of Birth Occurs For 83 Billionth Time  ",
          "Grimes Treats Her Six-Month-Old Son X Æ A-XII to a “Bath Rave For Babies”",
          "I Am Under 18’ Button Clicked For First Time In History Of Internet ",
          "Women named Karen can’t even get dates now thanks to 2020 ",
          "The World’s Most Powerful Women: We Make Them Discuss Fashion And What's In Their Bag ",
          "Trump declares Twitter national security threat after #DiaperDon trends following meltdown at miniature table",
          "Drug Use Down Among Uncool Kids ",
          "IRS: Sorry, but It’s Just Easier and Cheaper to Audit the Poor",
          "North Korean gymnast defects by vaulting fences",
          "Humans are making so much noise that animals are having to change their calls to communicate, study finds",
          "Scientists make major breakthrough in finding out why the Sun shines"
        ]
    }

    shouldComponentUpdate(){
        return false;
    }

    render() {
      let NEWS = this.state.news.join("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <marquee style={{color: 'white'}}> {NEWS} </marquee>
            </nav>
        );
    }
}

export default NavBar;
