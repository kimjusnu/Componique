"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ProgressBarBasic from "@components/ProgressBar/ProgressBarBasic";
import ProgressBarCircle from "@components/ProgressBar/ProgressBarCircle";
import ProgressBarSlider from "@components/ProgressBar/ProgressBarSlider";
import CodeBox from "@components/CodeBox";

const ProgressBarBasicDocs: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      {/* progressbar1 */}
      <div>
        <h1 className="text-[#2D3748]">ProgressBarBasic</h1>
        <p>
          <code>ProgressBarBasic</code> 컴포넌트는 작업의 진행 상태를 시각적으로
          표시하는 기본 진행 바(Progress Bar) 컴포넌트입니다. 이 컴포넌트는
          진행률을 백분율로 표시하며, 옵션으로 진행률 표시 및 작업 완료 여부를
          아이콘으로 나타낼 수 있습니다.
        </p>

        <h2 className="text-[#2D3748]">Import</h2>
        <CodeBox
          code={`import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';`}
          copyText={`import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <ProgressBarBasic percent={70} showPercent completed />
        </div>
        <CodeBox
          code={`import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';

function Example() {
  return <ProgressBarBasic percent={70} showPercent completed />;
}

export default Example;`}
          copyText={`import ProgressBarBasic from '@components/ProgressBar/ProgressBarBasic';

function Example() {
  return <ProgressBarBasic percent={70} showPercent completed />;
}

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Props</h2>
        <p>
          <code>ProgressBarBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>percent</code>
              </td>
              <td>진행 상태를 나타내는 백분율 값 (0-100)</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>0</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>showPercent</code>
              </td>
              <td>진행률을 텍스트로 표시할지 여부</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>completed</code>
              </td>
              <td>작업 완료 여부를 체크 아이콘으로 표시할지 여부</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">Full Example</h2>
        <CodeBox
          code={`import { useState, useEffect } from "react";

interface ProgressBarBasicProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

const ProgressBarBasic = ({
  percent,
  showPercent,
  completed,
}: ProgressBarBasicProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  return (
    <div className="flex w-10/12 items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div
          className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out"
          style={{ width: \`\${progressBar}%\` }}
        ></div>
      </div>
      {showPercent && <span className="ml-2">{\`\${progressBar}%\`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>
  );
};

export default ProgressBarBasic;`}
          copyText={`import { useState, useEffect } from "react";

interface ProgressBarBasicProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

const ProgressBarBasic = ({
  percent,
  showPercent,
  completed,
}: ProgressBarBasicProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  return (
    <div className="flex w-10/12 items-center">
      <div className="relative h-4 w-full rounded-full bg-[#D9D9D9]">
        <div
          className="h-4 rounded-full bg-Basic transition-all duration-500 ease-in-out"
          style={{ width: \`\${progressBar}%\` }}
        ></div>
      </div>
      {showPercent && <span className="ml-2">{\`\${progressBar}%\`}</span>}
      {progressBar === 100 && completed && <span className="ml-2">✅</span>}
    </div>
  );
};

export default ProgressBarBasic;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <br />
      <br />
      {/* progressbar2 */}
      <div className="">
        <h1 className="text-[#2D3748]">ProgressBarCircle</h1>
        <p>
          <code>ProgressBarCircle</code> 컴포넌트는 원형 진행 바를 표시하는
          컴포넌트로, 진행률과 완료 여부를 시각적으로 표현할 수 있습니다.
        </p>

        <h2 className="text-[#2D3748]">Import</h2>
        <CodeBox
          code={`import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';`}
          copyText={`import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <ProgressBarCircle
            percent={75}
            showPercent={true}
            completed={false}
          />
        </div>
        <CodeBox
          code={`import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';

function Example() {
  return <ProgressBarCircle percent={75} showPercent={true} completed={false} />;
}

export default Example;`}
          copyText={`import ProgressBarCircle from '@components/ProgressBar/ProgressBarCircle';

function Example() {
  return <ProgressBarCircle percent={75} showPercent={true} completed={false} />;
}

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Props</h2>
        <p>
          <code>ProgressBarCircle</code> 컴포넌트는 아래와 같은 Props를
          가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>percent</code>
              </td>
              <td>진행률을 나타내는 값 (0-100).</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>0</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>showPercent</code>
              </td>
              <td>진행률을 텍스트로 표시할지 여부.</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>completed</code>
              </td>
              <td>
                작업이 완료되었는지 여부. true일 경우 완료 표시 (체크 아이콘)가
                나타납니다.
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">Full Example</h2>
        <CodeBox
          code={`import { useState, useEffect } from "react";

interface ProgressBarCircleProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({
  percent,
  showPercent = true, // showPercent 기본값을 true로 설정
  completed = false, // completed 기본값을 false로 설정
}: ProgressBarCircleProps) => {
  const [progressBar, setProgressBar] = useState(percent); // 진행률 상태를 관리하는 state

  // percent 값이 변경될 때마다 progressBar 상태를 업데이트
  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  // 원형 진행 바의 크기와 둘레 계산
  const circleRadius = 50; // 원의 반지름 설정
  const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
  const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          // 진행률에 따라 원형 진행 바의 색상이 채워짐
          background: \`conic-gradient(#9AC5E5 \${progressBar * 3.6}deg, #d1d5db \${progressBar * 3.6}deg)\`,
        }}
      >
        {/* 원형의 중앙에 흰색 원을 배치, 그 안에 진행률 텍스트나 체크 표시 */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* showPercent가 true이면 진행률을 텍스트로 표시 */}
          {showPercent && (
            <span className="text-lg font-medium text-Basic">
              {\`\${progressBar}%\`}
            </span>
          )}
          {/* 진행률이 100%이고 completed가 true이면 체크 표시를 보여줌 */}
          {completed && progressBar === 100 && (
            <span className="text-lg font-medium text-Basic">✅</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;`}
          copyText={`import { useState, useEffect } from "react";

interface ProgressBarCircleProps {
  percent: number;
  showPercent?: boolean; // 진행률 표시 여부
  completed?: boolean; // 작업 완료 표시 여부
}

// 원형 진행 바 컴포넌트 정의
const ProgressBarCircle = ({
  percent,
  showPercent = true, // showPercent 기본값을 true로 설정
  completed = false, // completed 기본값을 false로 설정
}: ProgressBarCircleProps) => {
  const [progressBar, setProgressBar] = useState(percent); // 진행률 상태를 관리하는 state

  // percent 값이 변경될 때마다 progressBar 상태를 업데이트
  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  // 원형 진행 바의 크기와 둘레 계산
  const circleRadius = 50; // 원의 반지름 설정
  const circleCircumference = 2 * 3.14 * circleRadius; // 원의 둘레 계산
  const circleArea = ((100 - progressBar) / 100) * circleCircumference; // 진행률에 따라 원형이 채워질 부분 계산

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{
          // 진행률에 따라 원형 진행 바의 색상이 채워짐
          background: \`conic-gradient(#9AC5E5 \${progressBar * 3.6}deg, #d1d5db \${progressBar * 3.6}deg)\`,
        }}
      >
        {/* 원형의 중앙에 흰색 원을 배치, 그 안에 진행률 텍스트나 체크 표시 */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* showPercent가 true이면 진행률을 텍스트로 표시 */}
          {showPercent && (
            <span className="text-lg font-medium text-Basic">
              {\`\${progressBar}%\`}
            </span>
          )}
          {/* 진행률이 100%이고 completed가 true이면 체크 표시를 보여줌 */}
          {completed && progressBar === 100 && (
            <span className="text-lg font-medium text-Basic">✅</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
      <br />
      <br />
      {/* progressbar3  */}
      <div className="">
        <h1 className="text-[#2D3748]">ProgressBarSlider</h1>
        <p>
          <code>ProgressBarSlider</code> 컴포넌트는 슬라이더를 통해 진행률을
          조정할 수 있는 컴포넌트입니다. 진행률에 따라 변화하는 프로그레스 바와,
          옵션에 따라 진행률을 텍스트로 표시하거나 완료 여부를 체크할 수
          있습니다.
        </p>

        <h2 className="text-[#2D3748]">Import</h2>
        <CodeBox
          code={`import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';`}
          copyText={`import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';`}
          language="tsx"
          index={0}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <ProgressBarSlider percent={50} showPercent={true} completed={true} />
        </div>
        <CodeBox
          code={`import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';

function Example() {
  return <ProgressBarSlider percent={50} showPercent={true} completed={true} />;
}

export default Example;`}
          copyText={`import ProgressBarSlider from '@components/ProgressBar/ProgressBarSlider';

function Example() {
  return <ProgressBarSlider percent={50} showPercent={true} completed={true} />;
}

export default Example;`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />

        <h2 className="text-[#2D3748]">Props</h2>
        <p>
          <code>ProgressBarSlider</code> 컴포넌트는 아래와 같은 Props를
          가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>percent</code>
              </td>
              <td>초기 진행률을 나타내는 값 (0-100).</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>0</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>showPercent</code>
              </td>
              <td>진행률을 텍스트로 표시할지 여부.</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>completed</code>
              </td>
              <td>작업이 완료되었을 때 체크 표시를 보여줄지 여부.</td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">Full Example</h2>
        <CodeBox
          code={`import { useState, useEffect } from "react";

interface ProgressBarSliderProps {
  percent: number;
  showPercent?: boolean;
  completed?: boolean;
}

const ProgressBarSlider = ({
  percent,
  showPercent = true,
  completed = true,
}: ProgressBarSliderProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  const handleSliderChange = (event: any) => {
    setProgressBar(Number(event.target.value));
  };

  return (
    <div className="w-10/12">
      <div className="flex items-center">
        <div className="h-4 w-10/12 rounded-full bg-[#D9D9D9]">
          <div
            className="h-4 rounded-full bg-Basic transition-all"
            style={{ width: \`\${progressBar}%\` }}
          />
        </div>
        {showPercent && <span className="ml-2">{\`\${progressBar}\`}</span>}
        {progressBar === 100 && <span className="ml-2">✅</span>}
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={progressBar}
          onChange={handleSliderChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};
export default ProgressBarSlider;`}
          copyText={`import { useState, useEffect } from "react";

interface ProgressBarSliderProps {
  percent: number;
  showPercent?: boolean;
  completed?: boolean;
}

const ProgressBarSlider = ({
  percent,
  showPercent = true,
  completed = true,
}: ProgressBarSliderProps) => {
  const [progressBar, setProgressBar] = useState(percent);

  useEffect(() => {
    setProgressBar(percent);
  }, [percent]);

  const handleSliderChange = (event: any) => {
    setProgressBar(Number(event.target.value));
  };

  return (
    <div className="w-10/12">
      <div className="flex items-center">
        <div className="h-4 w-10/12 rounded-full bg-[#D9D9D9]">
          <div
            className="h-4 rounded-full bg-Basic transition-all"
            style={{ width: \`\${progressBar}%\` }}
          />
        </div>
        {showPercent && <span className="ml-2">{\`\${progressBar}\`}</span>}
        {progressBar === 100 && <span className="ml-2">✅</span>}
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={progressBar}
          onChange={handleSliderChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};
export default ProgressBarSlider;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default ProgressBarBasicDocs;
