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
      new Option("The Orphaned Heir", 14, 20),
      new Option("The Scientific Accident", 15, 5),
      new Option("The Alien Refugee", 16, 60),
      new Option("The Mysteriously Gifted", 17, 5)
    ],
    2
  ),
  new Page(
    "Well, well, a SUPERVILLAIN, eh? You've made an excellent decision. It's time for you to become the far more interesting FOIL to that goody-two-shoes hero. But first, what motivates your wicked deeds?",
    [
      new Option("Greed!", 10, 15),
      new Option("Revenge!", 11, 5),
      new Option("Chaos!", 12, 30),
      new Option("Power!", 13, 20)
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
  ),
  new Page(
    "Very well, [name]. If you insist. I wish you the best of luck. In that case, pick your career.",
    [
      new Option("Security Guard", 18, 1),
      new Option("Barista", 19, 2),
      new Option("Doctor", 20, 3),
      new Option("Programmer", 21, 4)
    ],
    7
  ),
  new Page(
    "Well, you could have picked a worse career. VILECORP, the brainchild of VEX VILLIFOUS, is hiring guards like crazy right now. Full-time, hazard pay, and great benefits! You can start on Monday!",
    [
      new Option("Great!", 22, -1),
      new Option("Anything less... evil available?", 23, 0)
    ],
    18
  ),
  new Page(
    "Let's see... It looks like there's a government contract with A.R.M.O.R., a new branch focused on research into SUPERPOWERED INDIVIDUALS. They do have a sizeable amount of liability paperwork for you to fill out, first, though. Sound better?",
    [
      new Option("Much!", 24, 1),
      new Option("Never mind, VILECORP it is.", 22, -1)
    ],
    23
  ),
  new Page(
    "Alright, [name], welcome to your first day at VILECORP. After receiving your suit, earpiece, and gun, you've been tasked with guarding VILECORP's newest research compound. You've been making your rounds for about an hour when you hear a STRANGE NOISE coming from one of the buildings. What do you do?",
    [
      new Option("Investigate.", 25, 0),
      new Option("Ignore it.", 26, 0),
    ],
    22
  ),
  new Page(
    "You move toward the building, when a CAPED FIGURE bursts through one of the walls. A MONSTROUS CREATURE barrels out after them. Through your earpiece, you hear an intruder alert, and an order to shoot the intruder.",
    [
      new Option("Shoot the CAPED FIGURE.", 27, -1),
      new Option("Shoot the MONSTER.", 28, -1),
      new Option("Run away!", 29, -1)
    ],
    25
  )
];
