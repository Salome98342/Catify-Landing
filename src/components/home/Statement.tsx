import { homeContent } from '../../data/home';
import { Reveal } from '../ui/Reveal';

export function Statement() {
  return (
    <div className="band">
      <div className="wrap">
        <Reveal>
          <p className="statement">
            {homeContent.statementBefore}
            <b>{homeContent.statementBold}</b>
            {homeContent.statementMiddle}
            <i>{homeContent.statementItalic}</i>
            {homeContent.statementAfterItalic}
            <b>{homeContent.statementSecondBold}</b>
            {homeContent.statementAfter}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
