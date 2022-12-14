import {Route, Routes} from 'react-router-dom';

import Error404 from './../pages/errors/Error404';
import EditCompanyInfo from '../pages/company/EditCompanyInfo';
import MyPageIndex from './../pages/mypage/member/MypageIndex';
import MyProfile from '../pages/mypage/member/MyProfile';
import ApplyHistory from '../pages/mypage/member/ApplyHistory';
import InterviewHistory from '../pages/mypage/member/InterviewHistory';
import EditMemberInfo from '../pages/mypage/member/EditMemberInfo';
import Withdraw from '../pages/members/Withdraw';
import MypageLayout from '../layouts/MypageLayout';
import MypageEntLayout from './../layouts/MypageEntLayout';
import WithdrawSuccess from '../pages/members/withdraw/WithdrawSuccess';
import EditEntMemberInfo from './../pages/mypage/ent-member/EditEntMemberInfo';
import MyProduct from './../pages/mypage/ent-member/MyProduct';
import PaymentHistory from '../pages/mypage/ent-member/PaymentHistory';
import MyJobSearch from '../pages/mypage/jobSearch/MyJobSearch';
import AddJobSearch from '../pages/mypage/jobSearch/RegistJobSearch';
import MyJobSearchDetails from '../pages/mypage/jobSearch/MyJobSearchDetails';
import MyJobSearchList from '../components/mypage/jobSearch/MyJobSearchList';
import InterviewSuggestionDetails from '../pages/interview/member/InterviewSuggestionDetails';
import ApplyListDetails from '../pages/mypage/applyList/ApplyListDetails';
import EntApplyList from '../pages/mypage/ent-applylist/EntApplyList';
import EntApplyListDetails from '../pages/mypage/ent-applylist/EntApplyListDetails';
import WriteProposal from '../pages/interview/ent-member/WriteProposal';

export default function MypageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}

      <Route index element={<MypageLayout />} />
      <Route path='ent' element={<MypageEntLayout />}>
        <Route path='edit-profile' element={<EditEntMemberInfo />} />
        <Route path='edit-company-info' element={<EditCompanyInfo />} />
        <Route path='my-product' element={<MyProduct />} />
        <Route path='payment' element={<PaymentHistory />} />
        <Route path='jobsearch' element={<MyJobSearch />} />
        <Route path='regist-jobsearch' element={<AddJobSearch />} />
        <Route path='details-jobsearch' element={<MyJobSearchDetails />} />
        <Route path='payment-history' element={<PaymentHistory />} />
        <Route path='apply-list'>
          <Route index element={<EntApplyList />} />
          <Route path='details/:resumeCode' element={<EntApplyListDetails />} />
          <Route path='writeproposal/:resumeCode' element={<WriteProposal />} />
        </Route>
      </Route>
      {/* <Route index element={<MyPageLayout />} /> */}
      <Route path='' element={<MypageLayout />}>
        <Route index element={<MyPageIndex />} />
        <Route path='edit-profile' element={<EditMemberInfo />} />
        <Route path='my-profile' element={<MyProfile />} />
        <Route path='apply-list'>
          <Route index element={<ApplyHistory />} />
          <Route path='details/:noticeCode' element={<ApplyListDetails />} />
        </Route>
        <Route path='suggestion-list'>
          <Route index element={<InterviewHistory />} />
          <Route
            path='details/:companyCode'
            element={<InterviewSuggestionDetails />}
          />
        </Route>
        <Route path='withdraw' element={<Withdraw />} />
        <Route path='withdraw-success' element={<WithdrawSuccess />} />
      </Route>
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
