import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FooterCoinItem from "./FooterCoinItem";
import { ReactComponent as TwitterIcon } from "assets/icons/TwitterIcon.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/TelegramIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/InstagramIcon.svg";

const useStyles = makeStyles(() => ({
    FooterBox: {
        width: '100%',
        background: '#000',
        marginTop: '30px',
        padding: '37px 70px 13px 70px',
        "@media (max-width: 940px)": {
            padding: '20px'
        }
    },
    FooterCoinBox: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '44px',
        marginBottom: '33px',
        "@media (max-width: 681px)": {
            gap: '10px'
        }
    },
    DividLine: {
        width: '100%',
        height: '1px',
        background: '#FFF',
        opacity: '0.1',
        border: 'none'
    },
    GambleWareBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '22px',
        marginTop: '16px',
        marginBottom: '15px',
        "@media (max-width: 681px)": {
            flexWrap: 'wrap'
        }
    },
    CopyRightBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '25px',
        marginBottom: '20px'
    },
    CopyRightText: {
        fontWeight: '400',
        opacity: '0.4',
        color: '#FFF',
        fontSize: '13px',
        lineHeight: '16px'
    },
    LogoIcon: {
        width: '110px',
        height: 'auto',
        borderRadius: '10px',
        objectFit: 'cover'
    },
    ContactBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: '6px',
        alignItems: 'center'
    },
    GambleIcon: {
        width: '225px',
        height: '54px'
    },
    GameCareIcon: {
        width: '94px',
        height: '27px'
    }
}));

const FooterCoins = [
    { 'btc': 'BitCoin' },
    { 'btclightning': 'BitcoinLightning' },
    { 'eth': 'Ethereum' },
    { 'xrp': 'XRP' },
    { 'usdc': 'USDCoin' },
    { 'doge': 'Dogecoin' },
    { 'lite': 'Litecoin' },
    { 'dash': 'Dash' },
    { 'busd': 'BinanceUSD' },
    { 'dai': 'DAI' },
    { 'pancake': 'PancakeSwap' },
    { 'shiba': 'SHIBA' },
    { 'sushi': 'Sushi' },
    { 'uniswap': 'Uniswap' },
    { 'polygon': 'Polygon' },
    { 'usdt': 'Tether' }
];

const MainFooter = () => {
    const classes = useStyles();

    return (
        <Box className={classes.FooterBox}>
            <Box className={classes.FooterCoinBox}>
                {
                    FooterCoins.map((item, index) => {
                        return (
                            <FooterCoinItem key={index} coin={item} />
                        );
                    })
                }
            </Box>
            <Box className={classes.DividLine}></Box>
            <Box className={classes.GambleWareBox}>
                <img src="/assets/images/gambleaware.png" alt="icon" className={classes.GambleIcon} />
                <img src="/assets/images/gamecare.png" alt="icon" className={classes.GameCareIcon} />
            </Box>
            <Box className={classes.DividLine}></Box>
            <Box className={classes.CopyRightBox}>
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/86/df/fa/86dffa89-81e1-4a73-4dc9-807575e69db2/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.jpg" className={classes.LogoIcon} alt="Logo" />
                <span className={classes.CopyRightText}>copyright ©2026</span>
                <Box className={classes.ContactBox}>
                    <Link to="https://twitter.com/memewarsx" target="_blank"><TwitterIcon /></Link>
                    <Link to="https://www.instagram.com/laniakea_qpu/" target="_blank"><InstagramIcon /></Link>
                </Box>
            </Box>
        </Box>
    );
};

export default MainFooter;
