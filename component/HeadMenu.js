'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HeadMenu = () => {
  const SITEURL = process.env.NEXT_PUBLIC_SITEURL;
  const [user, setUser] = useState(null);


  return (
    <header className="ROIHEADER navbar-sticky">
    {/*<div class="tob-bar" style="border-bottom : 1px solid #dddddd; padding:8px 0; background : #eeeeee;" class="hidden-sm hidden-xs">
  
    <div class="container">
  
    <ul class="topsnav">
  
                          <li><a href="https://mbaroi.in/mba-admission-predictor/">MBA Admission Predictor</a></li>
  
                    <li><a href="https://mbaroi.in/mba-roi-calculator/">MBA ROI Calculator</a></li>
  
                    <li><a href="https://mbaroi.in/iim-call-predictor/">CAT College Predictor</a></li>
  
                    <li><a href="https://mbaroi.in/mba-strength-finder/">MBA Strength Finder</a></li>
  
                    <li><a href="https://mbaroi.in/mba-program-finder/">Program Finder</a></li>
  
                     
                     <li><a href="https://mbaroi.in/grit-scale/">GRIT Scale</a></li>
  
                           <li><a href="https://mbaroi.in/career-calculator/">Career Calculator</a></li>
  
                     
                </ul>
  
                </div>
  
      </div>*/}
    <div className="topheader">
      <div className="container">
        <div className="topnav">
          <div className="logo">
            <a href="https://mbaroi.in/">
              <img
                src="https://mbaroi.in/img/logo.png"
                alt="MBAROI Logo"
                title="MBAROI Logo"
              />
            </a>
          </div>
          <div className="">
            <div className="account">
              {/*After login this Code will visiable Start*/}
              {/*After login this Code will Visiable End*/}
              <a href="https://mbaroi.in/login/">
                <i className="fa fa-user" /> <span>Login/Sign up </span>
              </a>
            </div>
          </div>
          {/*<div class="search">*/}
          {/*    <button class="btnsearch"><i class="fa fa-search"></i></button>*/}
          {/*    <div class="searchform">*/}
          {/*        <form>*/}
          {/*            <div class="form-group">*/}
          {/*                <input class="form-control" type="text" placeholder="Search"> */}
          {/*                <button class="srsubmit"><i class="fa fa-search"></i></button>*/}
          {/*            </div>*/}
          {/*        </form>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
    <div className="headernav">
      <div className="container">
        <nav className="main-nav">
          <div className="logo d-xl-none">
            <a href="https://mbaroi.in/">
              <img src="https://mbaroi.in/img/logo.png" alt="MBAROI Logo" />
            </a>
          </div>
          {/*<ul class="topsnav d-xl-none">
  
                <li><a href="https://mbaroi.in/mba-admission-predictor/">MBA Admission Predictor</a></li>
  
                <li><a href="https://mbaroi.in/career-calculator/">Career Calculator</a></li> 
  
                <li><a href="https://mbaroi.in/mba-roi-calculator/">MBA ROI Calculator</a></li>
  
                <li><a href="https://mbaroi.in/iim-call-predictor/">College Predictor</a></li>
  
                <li><a href="https://mbaroi.in/mba-strength-finder/">MBA Strength Finder</a></li>
  
                <li><a href="https://mbaroi.in/mba-program-finder/">Program Finder</a></li>
  
                
                     <li><a href="https://mbaroi.in/grit-scale/">GRIT Scale</a></li>
  
                     
            </ul>*/}
          <ul className="menu">
            <li className="active home-item">
              <a href="https://mbaroi.in/">
                <i className="fa fa-home" />
              </a>
            </li>
            <li className="drop-down">
              {" "}
              <a href="javascript:void(0);">MBA</a>
              <ul className="sub-menu">
                <li>
                  <a href="https://mbaroi.in/mba/">Modes of MBA Programs</a>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/types-of-mba-specialization/">
                    Types of MBA Specialization
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/sales/">Sales</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/marketing/">Marketing</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/finance/">Finance</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/business-analytics/">
                        Business Analytics
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/human-resource/">
                        Human Resource
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://mbaroi.in/education-loan/">Education loan</a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a href="javascript:void(0);">MBA Entrance Exams</a>
              <ul className="sub-menu">
                <li className="drop-down">
                  <a href="https://mbaroi.in/about-cat-exam/">CAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/entrance-exam-accepting-colleges/cat/">
                        Top MBA Colleges Accepting CAT Score
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/about-cat-exam/">About CAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-exam-date/">Exam Date</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-admit-card/">Admit Card</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat/cat-exam-registration/">
                        Registration
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat/cat-all-previous-year-papers/">
                        Previous Year Papers
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/IIM/cap/">All About CAP</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat/wat-pi-for-iims/">
                        WAT &amp; PI
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat/cat-answer-key/">
                        CAT Answer Key 2024
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/iim-call-predictor/">
                        CAT College Predictor
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-mock-test/">CAT Mock Test</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-result/">CAT Result 2024</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-roi-calculator/">
                        MBA ROI Calculator
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/cmat/">CMAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/cmat/">About CMAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-exam-date/">
                        Exam Date
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-admit-card/">
                        CMAT Admit Card
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-preparation/">
                        Preparation
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-registration/">
                        Registration
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-previous-years-papers/">
                        CAMAT Previous Years Papers
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-result/">
                        CMAT Result
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cmat/cmat-answer-key/">
                        CMAT Answer Key
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/xat/">XAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/xat/">About XAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/xat/xat-exam-date/">Exam Date</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/xat/xat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/xat/xat-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/xat/xat-admit-card/">
                        Admit Card
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/mat/">MAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/mat/">About MAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mat/mat-exam-date/">Exam Date</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mat/mat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mat/mat-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/blog/top-mba-colleges-accepting-mat-score/">
                        MAT Accepting Colleges
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/blog/mat-exam-preparation-strategy/">
                        MAT Exam Preparation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/gmat/">GMAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/gmat/">About GMAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/gmat/gmat-exam-date/">
                        Exam Date
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/gmat/gmat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/gmat/gmat-syllabus/">Syllabus</a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/nmat/">NMAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/nmat/about-nmat-exam/">
                        About NMAT
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/nmat/nmat-exam-date/">
                        Exam Date
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/nmat/nmat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/nmat/nmat-syllabus/">Syllabus</a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/snap/">SNAP</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/snap/">About SNAP</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/snap/snap-exam-date/">
                        Exam Date
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/snap/snap-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/snap/snap-syllabus/">Syllabus</a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/atma/">ATMA</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/atma/">About ATMA</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/atma/atma-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/atma/atma-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/atma/atma-exam-dates/">
                        Exam Dates
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/atma/atma-previous-years-papers/">
                        Previous Year Papers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/ibsat/">IBSAT</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/ibsat/">About IBSAT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/ibsat/ibsat-exam-date/">
                        Exam Date
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/ibsat/ibsat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/ibsat/ibsat-syllabus/">
                        Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="javascript:void(0);">IIFT (via CAT)</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/iift/">About IIFT</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-exam-date/">Exam Date</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-eligibility-criteria/">
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-syllabus/">Syllabus</a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/cat-admit-card/">Admit Card</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a href="javascript:void(0);">GD &amp; PI</a>
              <ul className="sub-menu">
                <li className="drop-down">
                  <a href="javascript:void(0);">Group Discussion</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/group-discussion/">
                        About Group Discussion
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/types-of-gd/">
                        Types of GD
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/gd-phases-and-procedures/">
                        GD Phases &amp; Procedures
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/evaluation-criteria/">
                        GD Evaluation Criteria
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/dos-and-donts-in-gd/">
                        Do's &amp; Don'ts in GD
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/gd-tips-and-strategies/">
                        GD Tips &amp; Strategies
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/gd-etiquette/">
                        GD Etiquette
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/group-discussions/gd-topics/">
                        Trending GD Topics
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://mbaroi.in/personal-interviews/">
                    Personal Interview
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/blog/gd-topics/">GD Topics</a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a href="javascript:void(0);">MBA Colleges</a>
              <ul className="sub-menu">
                <li className="drop-down">
                  <a href="javascript:void(0);">Colleges by Ranking</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/top-10-business-schools/">
                        Top 10 MBA Colleges
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/top-50-business-schools/">
                        Top 50 MBA Colleges
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/top-100-business-schools/">
                        Top 100 MBA Colleges
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/blog/top-mba-colleges-in-india/">
                        Top/Best MBA Colleges
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="javascript:void(0);">Colleges by Specialization</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/top-b-schools-for-business-analytics/">
                        Top MBA Colleges for Business Analytics
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/top-b-schools-for-marketing/">
                        Top MBA Colleges for Marketing
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/top-b-schools-for-finance/">
                        Top MBA Colleges for Finance
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/top-mba-colleges-for-fintech-in-india/">
                        Top MBA Colleges for FinTech{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://mbaroi.in/best-placement-mba-colleges/">
                    Best Placement MBA Colleges
                  </a>
                </li>
                <li className="drop-down">
                  <a href="https://mbaroi.in/mba-colleges-by-location/">
                    Colleges by Location
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-ahmedabad/">
                        MBA Colleges In Ahmedabad
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-bangalore/">
                        MBA Colleges In Bangalore
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-delhi/">
                        MBA Colleges In Delhi NCR
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-hyderabad/">
                        MBA Colleges In Hyderabad
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-indore/">
                        MBA Colleges In Indore
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/jaipur/rank-wise-top-mba-colleges-in-jaipur/">
                        MBA Colleges In Jaipur
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-mumbai/">
                        MBA Colleges In Mumbai
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/mba-colleges-in-pune/">
                        MBA Colleges In Pune
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="#">Colleges by Zone</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/zone-wise/east/">
                        MBA Colleges In East Zone
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/zone-wise/west/">
                        MBA Colleges In West zone
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/zone-wise/north/">
                        MBA Colleges In North Zone
                      </a>
                    </li>
                    <li>
                      <a href="https://mbaroi.in/mba-colleges-by-location/zone-wise/south/">
                        MBA Colleges In south Zone
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="#">International MBA Colleges</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://mbaroi.in/international-mba-colleges/">
                        Top International MBA Colleges{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://mbaroi.in/blog/">Articles</a>
            </li>
            {/*<li><a href="https://mbaroi.in/mba-admissions/">MBA Admissions 2021</a></li>*/}
            <li className="drop-down">
              <a href="https://mbaroi.in/IIM/">IIM Info</a>
              <ul className="sub-menu">
                <li>
                  <a href="https://mbaroi.in/IIM/iim-news/">IIM News</a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/wat-written-ability-test/">
                    IIM WAT 2023
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/cap/">All About CAP 2023</a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/iim-seats-and-fees/">
                    IIM Seats and Fees
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/iim-waitlist-movement/">
                    IIM Waitlist Movement
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/iim-cut-off/">IIM Cut off</a>
                </li>
                <li>
                  <a href="https://mbaroi.in/blog/admission-in-iim-without-cat/">
                    IIM Without CAT
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/IIM/iim-placements/">
                    IIM Placements
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-admission-predictor/">
                    IIM Admission Predictor
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/iim-call-predictor/">
                    CAT College Predictor
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-roi-calculator/">
                    MBA ROI Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a href="javascript:void(0);">MBA Tools</a>
              <ul className="sub-menu">
                <li>
                  <a href="https://resume.mbaroi.in/" target="_blank">
                    AI Resume Builder
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-admission-predictor/">
                    MBA Admission Predictor
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-roi-calculator/">
                    MBA ROI Calculator
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/iim-call-predictor/">
                    CAT College Predictor
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-strength-finder/">
                    MBA Strength Finder
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/mba-program-finder/">
                    Program Finder
                  </a>
                </li>
                <li>
                  <a href="https://mbaroi.in/grit-scale/">GRIT Scale</a>
                </li>
                <li>
                  <a href="https://mbaroi.in/career-calculator/">
                    Career Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <input
                type="text"
                id="searchButton"
                placeholder="Search here..."
                readOnly=""
                onclick="openPopup()"
              />
            </li>
            {/*<li class="drop-down">
  
                    <li><a href="https://courses.mbaroi.in" target="_blank">Courses</a></li>
  
                </li>*/}
            {/*  <li class="drop-down">
  
                    <li><a href="https://askdaddy.in" target="_blank">AskDaddy</a></li>
  
                </li>
   */}
            {/*  <a href="https://mbaroi.in/IIM/cap/" class="desktop-hide">*/}
            {/*<img src="https://mbaroi.in/testdata/mba2/img/iim-cap.jpeg" width="450px;" class="adimg_header" style="margin:15px 25px 15px 0;">*/}
            {/*</a>*/}
          </ul>
        </nav>
      </div>
    </div>
    {/*   <style>
  
  @media screen and (max-width: 400px)
  
  {
  
      .mobile-hide{
  
    display:none !important;
  
      }
  
     
  
  }
  
  
  
  
  
  </style> */}
  </header>
  
  );
};

export default HeadMenu;
