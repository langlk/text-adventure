import { Page } from './page.model';
import { Option } from './option.model';

export const PAGES: Page[] = [
  new Page(
    "Welcome! You, [name], are a character in the HEROES OF SEATTLE, a comic book universe! What archetype shall you choose?",
    [
      new Option("The Daring Superhero!", 2, 40),
      new Option("The Dastardly Supervillain!", 3, 60),
      new Option("The Loyal Sidekick!", 4, 20),
      new Option("The Romantic Interest!", 5, 10),
      new Option("The Ordinary Citizen!", 6, 1),
    ],
    1
  ),
  new Page(
    "You've decided to be a SUPERHERO! Well chosen, [name]. You're about to begin your journey, which means that it's time for your ORIGIN STORY. What beginning shall you choose?",
    [
      new Option("Go to third page", 3, 2),
      new Option("Go to first Page", 1, -1)
    ],
    2
  ),
  new Page(
    "Well, well, a SUPERVILLAIN, eh? You've made an excellent decision. It's time for you to become the far more interesting FOIL to that goody-two-shoes hero. But first, what motivates your wicked deeds?",
    [
      new Option("Go to second page", 2, -1),
      new Option("Go to first Page", 1, -2)
    ],
    3
  ),
  new Page(
    "Choosing to be the SIDEKICK in your own adventure? That's an... interesting decision. Are you certain you want to proceed down this path?",
    [
      new Option("No, I've changed my mind.", 1, -20),
      new Option("Yes, I'm ready to support my SUPERHERO.", 9, 0)
    ],
    4
  ),
  new Page(
    "The ROMANTIC INTEREST? You must be very fond of beind held hostage. If not, you may wish to choose a different path. Are you sure you wish to proceed?",
    [
      new Option("No, I like having agency.", 1, -10),
      new Option("Yes, bring on the kidnappings.", 8, 0)
    ],
    5
  ),
  new Page(
    "I think you've made a mistake. You do realize what the fate of an ORDINARY CITIZEN is likely to be in a SUPERHERO COMIC, yes? It's NOT GOOD. You really ought to choose someone PLOT-CRITICAL. Why don't you do that now?",
    [
      new Option("Yes, I want to live.", 1, -1),
      new Option("No, I understand the risks.", 7, 0)
    ],
    6
  )
];
