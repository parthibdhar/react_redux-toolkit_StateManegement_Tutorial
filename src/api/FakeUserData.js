import Chance from "chance";


const chance = Chance();

export const fakeUserData = () => {
    console.log("FakeUserData: ", chance.name({ middle: true }));
    return chance.name({ middle: true });
}

