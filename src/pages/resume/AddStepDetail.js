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

function AddStepDetail() {
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
        <MainResume register={register} setValue={setValue} />
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
        <Button
          variant='contained'
          size='large'
          type='submit'
          onClick={() => {
            navigate('/resume');
          }}
        >
          ?????? ??????
        </Button>
      </FormContainer>
    </OutletContainer>
  );
}

export default AddStepDetail;
