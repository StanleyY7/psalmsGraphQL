const PsalmApi = require("../datasource");
const expectedOutput = require("./testData");

jest.mock("apollo-datasource-rest");

beforeEach(() => {
  psalmApi = new PsalmApi();
});

describe("DataSource Tests", () => {
  test("It should return expectedOutput from a given id", async () => {
    psalmApi.get = jest.fn().mockResolvedValueOnce({
      id: 1,
      verse: [
        "",
        "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,",
        "but whose delight is in the law of the Lord, and who meditates on his law day and night.",
        "That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither -- whatever they do prospers.",
        "Not so the wicked! They are like chaff that the wind blows away.",
        "Therefore the wicked will not stand in the judgement,",
        "nor sinners in the assembly of the righteous.",
        "For the LORD watches over the way of the righteous,",
        "but the way of the wicked leads to destruction",
      ],
      book: 1,
      version: "NIV",
    });
    const result = await psalmApi.get({ id: 1 });
    expect(result).toEqual(expectedOutput[0]);
  });

  test("It should return expectedOutput from a given different id", async () => {
    psalmApi.get = jest.fn().mockResolvedValueOnce({
      id: 3,
      verse: [
        "",
        "Lord, how many are my foes! How many rise up against me!",
        `Many are saying of me, "God will not deliver him."`,
        "But you, Lord, are a shield around me, my glory, the One who lifts my head high.",
        "I call out to the Lord, and he answers me from his holy mountain.",
        "I lie down and sleep; I wake again, because the Lord sustains me.",
        "I will not fear though tens of thousands assail me on every side.",
        "Arise, Lord! Deliver me, my God! Strike all my enemies on the jaw; break the teeth of the wicked.",
        "From the Lord comes deliverance. May your blessing be on your people.",
      ],
      book: 1,
      version: "NIV",
    });
    const result = await psalmApi.get({ id: 3 });
    expect(result).toEqual(expectedOutput[2]);
  });
});
