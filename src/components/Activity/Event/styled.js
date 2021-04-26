import styled from 'styled-components';

export const EventWrapper = styled.div`
  margin-bottom: 15px;

  @media only screen and (max-width: 720px) {
    position: relative;
  }
`;

export const RepoName = styled.h3`
  margin: 0;
  margin-right: 10px;

  @media only screen and (max-width: 720px) {
    font-size: 12px;
    margin-bottom: 5px;
    width: 160px;
  }
`;

export const Commits = styled.div`
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const EventType = styled.span`
  padding: 3px 7px;
  font-size: 11px;
  border-radius: 15px;
  border: 1px solid #333;
  margin-left: 30px;

  @media only screen and (max-width: 720px) {
    position: absolute;
    right: 3px;
    top: 0;
  }
`;

export const EventActor = styled.div`
  font-size: 12px;

  @media only screen and (max-width: 720px) {
    font-size: 11px;
  }
`;
