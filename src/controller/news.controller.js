import { asyncHandller } from "../utils/asyncHandller.js";
import { getData } from "../utils/getData.js";
import { mainUrl } from "../constants.js";

const newsController = asyncHandller(
    async (req,res) => {
        const lan = req.params.lan;
        const cheerioData = await getData(`${mainUrl}/${lan}`);
        // const data =  cheerioData.html();
        // const maindata = cheerioData('div[class="TfxplVx3RtbilOD2tqd6"]');
        console.log(maindata[0]);
    }
)

export { newsController }