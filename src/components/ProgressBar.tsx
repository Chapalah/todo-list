import { Progress } from "antd";
import { useState, useEffect, memo } from "react";
import { useAppSelector } from "../hooks";

type Proggres = {
  total: number;
  completedCount: number;
  percent: number;
};

const ProgressBar = () => {
  const { list } = useAppSelector((state) => state.todos);
  const [proggres, setProggres] = useState<Proggres>({
    total: 0,
    completedCount: 0,
    percent: 0,
  });

  useEffect(() => {
    const total = list.length;
    const completedCount = list.reduce(
      (acc, item) => (item.completed ? (acc += 1) : acc),
      0
    );
    setProggres({
      total,
      completedCount,
      percent: Math.floor((completedCount / total) * 100),
    });
  }, [list]);

  return (
    <>
      Completed {proggres.completedCount} of {proggres.total}
      <Progress percent={proggres.percent} />
    </>
  );
};

export default memo(ProgressBar);
