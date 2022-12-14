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
    '?????? ?????????',
    '????????? ?????????',
    '??? ?????????',
    '?????? ?????????',
    'DBA',
    'IOS ?????????'
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
    navigate('/resume');
  };

  // DB ??????
  const variable = {
    title: '???????????? ????????? ?????????',
    name: 'Hoiae',
    gender: 'M',
    birthday: '1996-08-19',
    zipCode: '12345',
    address: '????????? ????????? ????????? 123',
    address2: '???????????? ??????',
    phone: '02-1234-1234',
    mobilePhone: '010-1234-1234',
    emailFront: 'hoiae',
    emailBack: 'mtvs.com',
    imgSrc:
      'http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/067/872/918/67872918_1588900211036_19_600x600.JPG'
  };

  return (
    <OutletContainer>
      <BackButtonContainter>
        <StyledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          ????????????
        </StyledButton>
      </BackButtonContainter>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* ????????? ?????? */}
        <MainResume
          register={register}
          setValue={setValue}
          variable={variable}
          isReadOnly={true}
        />
        {/* ???????????? */}
        <SchoolAbility register={register} setValue={setValue} />
        {/* ?????? ?????? */}
        <AutoSelect title={'?????? ??????'} list={skillList} />
        {/* ?????? ?????? */}
        <AutoSelect title={'?????? ??????'} list={posList} />
        {/* ???????????? */}
        {selectedList.career && <CareerComponent />}
        {/* ???????????? ??? ???????????? */}
        {selectedList.activity && <CoreActivity />}
        {/* ???????????? */}
        {selectedList.external && <ExternalActivity />}
        {/* ????????? ?????? */}
        {selectedList.foreign && <ForeignAbility />}
        {/* ???????????? ???????????? */}
        {selectedList.experience && <TrainingCareer />}
        {/* ?????? ?????? ?????? */}
        {selectedList.qualification && <Qualification />}
        <div style={{display: 'flex', flexDirection: 'row', gap: '30px'}}>
          <Button
            variant='contained'
            size='large'
            /* type='submit' */ onClick={handleClickOpen}
          >
            ????????????
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'?????????????????????????'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                ?????? ????????? ????????? ???????????????.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseYesHandler}>???</Button>
              <Button onClick={handleClose} autoFocus>
                ?????????
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant='contained'
            size='large'
            /* type='submit' */ onClick={() => {
              navigate(-1);
            }}
          >
            ????????????
          </Button>
        </div>
      </FormContainer>
    </OutletContainer>
  );
}

export default ResumeEdit;
