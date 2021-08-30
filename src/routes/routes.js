import PATHS from "./routes-path";
import { Route, Switch } from "react-router";
import LoginPage from "../app/components/LoginPage/LoginPage";
import UserSignUpPage from "../app/components/SignUpPage/UserSignUpPage";
import ResercherSignUpPage from "../app/components/SignUpPage/ResearcherSignUpPage";
import LandingPage from "../app/components/LandingPage/LandingPage";
import ForgotPassword from "../app/components/LoginPage/SubComponents/ForgotPassword";
import ProtectedRoute from "../app/components/ProtectedRoute";
import BaseRoute from "../app/components/BaseRoute";
import HomePage from "../app/components/HomePage/HomePage";
import ProductDetail from "../app/containers/products/ProductDetails";
import PreviewQuestionnaire from "../app/components/PreviewProduct/PreviewQuestionnare";
import PreviewPrototype from "../app/components/PreviewProduct/PreviewPrototype";
import ProductReviewResponse from "../app/components/NewProduct/ProductReview/ProductReview";
import ParticipantsNavbar from "../app/containers/participantsNavbar";
import SearchProduct from '../app/components/SearchProduct/SearchProduct';
import HomePageParticipant from '../app/components/HomePageParticipant/HomePageParticipant'
import CompletedReview from "../app/components/CompletedReview/CompletedReview";
import ReviewedProducts from "../app/components/ReviewedProducts/ReviewedProducts";
import SurveyResponse from "../app/components/SurveyResponse/SurveyResponse";
import PrototypeResponse from "../app/components/PrototypeResponse/PrototypeResponse";
import ErrorPage from "../app/containers/errorPage";

const AppRoutes = (
  <div>
    <Switch>
      {/* NOTE: Use Route for pages that don't require authentication */}
      <Route exact path={PATHS.landingPage} component={LandingPage} />
      <BaseRoute exact path={PATHS.loginPage} component={LoginPage} />
      <BaseRoute exact path={PATHS.forgotPassword} component={ForgotPassword} />
      <BaseRoute exact path={PATHS.participantRegisterPage} component={UserSignUpPage} />
      <BaseRoute exact path={PATHS.researcherRegisterPage} component={ResercherSignUpPage} />

      {/* NOTE: Use ProtectedRoute for pages that require authentication */}

      <ProtectedRoute exact path={PATHS.createProduct} component={ProductDetail} />
      <ProtectedRoute exact path={PATHS.editProduct + ':productId'} component={ProductDetail} />
      <ProtectedRoute exact path={PATHS.listProduct} component={HomePage} />
      <ProtectedRoute exact path={PATHS.listProductParticipant} component={HomePageParticipant} />
      <ProtectedRoute exact path={PATHS.searchProduct} component={SearchProduct} />
      <ProtectedRoute exact path={PATHS.reviewHistory} component={CompletedReview} />
      <ProtectedRoute exact path={PATHS.previewQuestionnaire} component={PreviewQuestionnaire} />
      <ProtectedRoute exact path={PATHS.previewPrototype} component={PreviewPrototype} />
      <ProtectedRoute exact path={PATHS.productReviewResponse + ':productId'} component={ProductReviewResponse} />
      <ProtectedRoute exact path={PATHS.reviewedProducts} component={ReviewedProducts} />
      <ProtectedRoute exact path={PATHS.reviewProduct + ':productId'} component={ParticipantsNavbar} />
      <ProtectedRoute exact path={PATHS.resumeReview +':productId'+'/:reviewId'} component={ParticipantsNavbar}/>
      <ProtectedRoute exact path={PATHS.surveyReview + ':reviewId'} component={SurveyResponse} />
      <ProtectedRoute exact path={PATHS.prototypeReview + ':reviewId'} component={PrototypeResponse} />
      <Route exact path="*" component={ErrorPage} />
    </Switch>
  </div>
);

export default AppRoutes;
