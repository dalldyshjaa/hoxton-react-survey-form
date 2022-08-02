import AnswersItem, { AnswerItemType } from "./AnswersItem";

type Props = {
  username: string;
  email: string;
  logo: number;
  consistency: number;
  colour: number;
  bestFeatures: string[];
  worstFeatures: string[];
  timeSpent: string;
  review: string;
};

export default function AnswersList({
  username,
  email,
  logo,
  consistency,
  colour,
  bestFeatures,
  worstFeatures,
  timeSpent,
  review,
}: Props) {
  return (
    <ul>
      <AnswersItem
        username={username}
        email={email}
        bestFeatures={bestFeatures}
        worstFeatures={worstFeatures}
        consistency={consistency}
        colour={colour}
        logo={logo}
        timeSpent={timeSpent}
        review={review}
      />
    </ul>
  );
}
