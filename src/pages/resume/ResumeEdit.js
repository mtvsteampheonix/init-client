import styled from 'styled-components';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AutoSelect from '../../components/resume/AutoSelect';
import CareerComponent from '../../components/resume/CareerComponent';
import CoreActivity from '../../components/resume/CoreActivity';
import ExternalActivity from '../../components/resume/ExternalActivity';
import ForeignAbility from '../../components/resume/ForeignAbility';
import TrainingCareer from '../../components/resume/TrainingCareer';
import Qualification from '../../components/resume/Qualification';
import SchoolAbility from '../../components/resume/SchoolAbility';
import MainResume from '../../components/resume/MainResume';
import {useForm} from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;
  gap: 30px;

  width: 100%;
  min-width: 1200px;
`;

export const BackButtonContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 50px;
`;

export const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function ResumeEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const {register, handleSubmit, setValue} = useForm();

  const skillList = [
    'Node.js',
    'React',
    'Spring Boot',
    'Oracle',
    'JPA',
    'Hibernate'
  ];

  const posList = [
    '서버 개발자',
    '프론트 개발자',
    '웹 개발자',
    '자바 개발자',
    'DBA',
    'IOS 개발자'
  ];

  const selectedList = useSelector((state) => state.resumeSelectReducer);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYesHandler = () => {
    setOpen(false);
  };

  return (
    <OutletContainer>
      <BackButtonContainter>
        <StyledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </StyledButton>
      </BackButtonContainter>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* 이력서 메인 */}
        <MainResume register={register} setValue={setValue} />
        {/* 학력사항 */}
        <SchoolAbility register={register} setValue={setValue} />
        {/* 스킬 스택 */}
        <AutoSelect title={'스킬 스택'} list={skillList} />
        {/* 희망 직무 */}
        <AutoSelect title={'희망 직무'} list={posList} />
        {/* 경력사항 */}
        {selectedList.career && <CareerComponent />}
        {/* 주요활동 및 수상경력 */}
        {selectedList.activity && <CoreActivity />}
        {/* 해외경험 */}
        {selectedList.external && <ExternalActivity />}
        {/* 외국어 능력 */}
        {selectedList.foreign && <ForeignAbility />}
        {/* 직업훈련 이수이력 */}
        {selectedList.experience && <TrainingCareer />}
        {/* 보유 자격 면허 */}
        {selectedList.qualification && <Qualification />}
        <Button
          variant='contained'
          size='large'
          /* type='submit' */ onClick={handleClickOpen}
        >
          수정 완료
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'수정하시겠습니까?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              해당 이력서 정보가 수정됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseYesHandler}>예</Button>
            <Button onClick={handleClose} autoFocus>
              아니오
            </Button>
          </DialogActions>
        </Dialog>
      </FormContainer>
    </OutletContainer>
  );
}

export default ResumeEdit;