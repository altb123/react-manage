import { Card, Progress } from 'antd';
import { red, green, yellow } from '@ant-design/colors';
import './language.scss';

function LanguageView() {
    return (
        <div className="language-detail">
            <Card
                title="语言详情"
                bordered={false}
                style={{
                    width: '100%',
                    height: 290
                }}>
                    
                <div className="progress-item">
                    <p>React</p>
                    <Progress percent={70} status="active" strokeColor={green[5]} />
                </div>

                <div className="progress-item">
                    <p>Javascript</p>
                    <Progress percent={50} status="active" strokeColor={yellow[5]} />
                </div>

                <div className="progress-item">
                    <p>Css</p>
                    <Progress percent={30} status="active" />
                </div>

                <div className="progress-item">
                    <p>Html</p>
                    <Progress percent={20} status="active" strokeColor={red[5]} />
                </div>                
            </Card>
        </div>
    )
};

export default LanguageView;