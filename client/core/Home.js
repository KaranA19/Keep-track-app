import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import financeImg from "./../assets/images/financial.jpg";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import ExpenseOverview from "./../expense/ExpenseOverview";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    height: "101vh",
    color: "#4A314D",
    overFlow:"hidden"
    
  }
  ,
  head: {
    marginTop:"40px",
    textTransform: "uppercase",
    backgroundImage: "linear-gradient(-225deg,#231557 20%,#44107a 11%,#ff1361 67%,#fff800 100%)",
    backgroundSize: "auto auto",
    backgroundClip: "border-box",
    backgroundSize: "100% auto",
    color: "#fff",
    textAlign:"justify",
    backgroundClip: "text",
    textFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textclip 2s linear infinite",
    fontSize: "40px", 
   
    
  },
  para:{
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    flexDirection:"row-reverse",
    margin:"30px",
    marginTop:"10px"
  },
  paradiv:{
    borderRadius: "25px",
    border:"1px solid #9ecaed",    
    margin: "30px",
    marginBottom:"10px",
    marginTop:"10px",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px #9ecaed"
  },
  footer:{
    textAlign:"center",
    marginTop: "auto",
    padding: "30px",
    fontSize: "30px",
    color:"#4A314D",
    backgroundColor:"#61C0A9",
    width: "95vw"
  },
  footr:{
    fontSize:"20px"
  },
  card: {
    maxWidth: 800,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  link:{
    color:"#F2E9E4"
  },
  title: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 440,
  },
  details: {
    fontSize:"17px"
  },
  imag:{
    display:"block",
    float:"right",
    margin: "0 0 0 15px",
    minWidth: "400px",
    minHeight:"300px",
    backgroundPosition: "center",
    backgroundSize:"contain"
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#4f83cc",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      {auth.isAuthenticated() && <ExpenseOverview />}
      {!auth.isAuthenticated() && typeof window !== "undefined" && (
        <div className={classes.home}>
          <h1 className={classes.head}>
            <u>Home Page</u>
          </h1>
          {/* <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/> */}
          <div className={classes.paradiv}>
            <p className={classes.para}>
            
            <CardMedia className={classes.imag} image={financeImg} title="Unicorn Bicycle"/>
              
            Personal finance is a term that covers managing your money as well as saving and investing.
             It encompasses budgeting, banking, insurance, mortgages, investments, and retirement, tax, and estate planning. 
             The term often refers to the entire industry that provides financial services to individuals and households and advises them about financial and investment opportunities. 
             Personal finance management is an important part of people’s lives.<br/><br/>
              However, everyone does not have the knowledge or time to manage
              their finances in a proper manner. And, even if a person has time
              and knowledge, they do not bother with tracking their expenses as
              they find it tedious and time-consuming. Now, you don’t have to
              worry about managing your expenses, as you can get access to an
              expense tracker that will help in the active management of your
              finances.Personal finance is about meeting your personal financial goals.
               These goals could be anything—having enough for short-term financial needs, planning for retirement, or saving for your child’s college education.
                It depends on your income, spending, saving, investing, and personal protection (insurance and estate planning).
            </p>
            <ol>
              <li className={classes.list}><h3>Know Your income:</h3>{"\n"}<p className={classes.details}>It's all for nothing if you don't know how much you bring home after taxes and withholding. So before deciding anything, ensure you know exactly how much take-home pay you receive.If you don’t check your spending and create a budget, you will have no control whatsoever on your money. Instead, money will control you, and you will either have perpetual lack of funds or you will end up steeped in debt. A money manager app helps you decide between short-term and long-term spending.</p></li>
              <li><h3>Devise a Budget:</h3>{"\n"}<p className={classes.details}>A budget is essential to living within your means and saving enough to meet your long-term goals. The 50/30/20 budgeting method offers a great framework. It breaks down like this:
              <ul>
                <li>Fifty percent of your take-home pay or net income (after taxes) goes toward living essentials, such as rent, utilities, groceries, and transport.</li>
                <li>Thirty percent is allocated to discretionary expenses, such as dining out and shopping for clothes. Giving to charity can go here as well.</li>
                <li>Twenty percent goes toward the future—paying down debt and saving for retirement and emergencies.</li>
              </ul>
              </p></li>
              <li><h3>Pay Yourself First:</h3>{"\n"}<p className={classes.details}>It’s important to “pay yourself first” to ensure money is set aside for unexpected expenses, such as medical bills, a significant car repair, day-to-day expenses if you get laid off, and more. The ideal safety net is three to 12 months of living expenses.</p></li>
              <li><h3> Limit and Reduce Debt:</h3>{"\n"}<p className={classes.details}>It sounds simple enough: Don't spend more than you earn to keep debt from getting out of hand. But, of course, most people have to borrow from time to time, and sometimes going into debt can be advantageous—for example, if it leads to acquiring an asset. Taking out a mortgage to buy a house might be one such case. Still, leasing sometimes can be more economical than buying outright, whether renting a property, leasing a car, or even getting a subscription to computer software.</p></li>
              <li><h3>Plan For Your Future:</h3>{"\n"}<p className={classes.details}>To protect the assets in your estate and ensure that your wishes are followed when you die, be sure you make a will and—depending on your needs—possibly set up one or more trusts. You also should look into insurance and find ways to reduce your premiums, if possible: auto, home, life, disability, and long-term care (LTC). Periodically review your policy to ensure it meets your family’s needs through life’s major milestones.

Other critical documents include a living will and a healthcare power of attorney. While not all of these documents directly affect you, all of them can save your next of kin considerable time and expense when you fall ill or become otherwise incapacitated.</p></li>
            
            </ol>
          </div>
          <div className={classes.footer}>
            <div  className={classes.footr}>
              Welcome to the Keep Track.{" "}
              <Link className={classes.link} to="/signup">Sign up</Link> or{" "}
              <Link className={classes.link} to="/signin">Sign in</Link> to get started.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
