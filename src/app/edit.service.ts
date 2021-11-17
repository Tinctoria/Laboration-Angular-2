import { Injectable } from '@angular/core';
import { Question } from './question-answer.module';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  questions: Question[] = [
    new Question (1,'Det är jag som är Ida','32 år gammal blivande frontendutvecklare, före detta projektledare inom byggbranschen. Jag bor i Växjö med min sambo Fredrik och våra två katter Hades och Hannibal. På fritiden tycker jag om att spela med mina vänner. Då blir det allt från tv-spel till rollspel. För att hålla kroppen i form yogar jag och är också gärna ute och jagar geocachar i något naturresarvat någonstans.'),
    new Question (2, 'Förklara vad Angular är och varför det används', 'Angular är ett ramverk för JavaScript och används främst för att bygga Single page applikationer (SPA)'),
    new Question (3, 'Förklara vad Single page applications är','SPAer är webbapplikationer eller webbplatser som endast laddar in en websida. Denna förändras med användarens interaktion genom att skriva om webbsidans innehåll på ett dynamiskt vis.'),
    new Question (4, 'Beskriv de fundamentala delarna i Angulars arkitektur','Angular består av komponenter som är organiserade i så kallde NgModules. Dessa moduler hanterar koden och ger den funktionalitet. Olika moduler kan importera och använda funktionalitet från andra moduler. Varje komponent definierar en klass som innehåller data om hur klassen är uppbyggd och används. Den är sedan kopplad till en så kallad template, en html-fil som beskriver hur data skall renderas ut i webbläsaren, en view. Vi kan påverka datan som visas i viewn dynamiskt genom Data-binding. Det finns två typer, event-binding som låter templaten använda användarinput för att rendera data och property-binding som interpolerar data från komponenten och renderar ut. För data som inte är kopplad till en specifik view eller som används i flera views kan vi skapa så kallade Services. Dessa är uppbyggda som vanliga klasser och används av flera components genom att “injiceras” som providers. Utöver det finns även directives som kan vara strukturella, som *ngFor och ändrar hur DOMen är uppbyggd. De kan också vara kopplade till hur ett element i DOMen ser ut eller beter sig och då kallas de attribute directive.'),
    new Question (5, 'Redogör för vad TypeScript är och dess syfte', 'TypeScript är en utökad variant av Javascripts programmeringsspråk med mer funktionalitet så som klasser och typer. Det ger bland annat den som kodar möjligheten att hårdtypa sina variabler. Detta är en fördel för då ser man problemen direkt i utvecklingsmiljön när kompileringen från TypeScript till Javascript sker, det blir helt enkelt ett säkrare sätt att koda.'),
    new Question (6, 'Förklara skillnaden mellan att utveckla en webbapplikation som en single page applikation med Angular eller som en "traditionell" webbapplikation','Skillnaden med att utveckla en applikation i ett ramverk som angular är att jag som utvecklare har flera färdiga verktyg som jag kan använda mig av som sedan transformeras till javascriptkod som websidan kan läsa. Jag får helt enkelt hjälp med att bygga min js-kod av inbyggd funktionalitet i ramverket baserat på ts-kod. Vill jag till exempel skapa en component hjälper Angular mig med att skapa filer som komponenten behöver samt lägga till importer på rätt ställe i modulen. Det är mycket som sker bakom kulisserna som Angular hjälper till med och som jag inte behöver bry mig om. Det är lättare för mig att snabbt koppla ihop användarinput med funktioner och få en fungerade produkt. Jag behöver inte skapa alla komponenter, alla metoder och alla funktioner från grunden. Skapar jag en webbsida på ett traditionellt sätt har jag tex flera olika html-filer där data renderas ut. Dessa är i sin tur kopplade till olika javascript-filer där jag endast har tillgång till de verktyg som finns i javascript. Resten behöver jag bygga ihop själv.')
  ]

  constructor() { }

  getQuestions() {
    return this.questions.slice();
  }

  getQuestion(id:number) {
    let questions=this.questions.slice();

    for(let question of questions){
      if(id == question.id){
        return question;
      } 
    }
    return new Question (id, 'Nope', 'Nothing to see here');
  }

  editQuestion(i: number, question: string, answer: string) {
    this.questions[i-1].question= question; 
    this.questions[i-1].answer= answer; 


  }
}
