function solution(id_list, report, k) {
  let reportList = {};
  let reportCount = {};

  let result = [];

  for (let i = 0; i < id_list.length; i++) {
    reportList[id_list[i]] = [];
    reportCount[id_list[i]] = 0;
    result.push(0);
  }

  for (let i = 0; i < report.length; i++) {
    let reportInfo = report[i].split(" ");
    if (!reportList[reportInfo[0]].includes(reportInfo[1])) {
      reportList[reportInfo[0]].push(reportInfo[1]);
      reportCount[reportInfo[1]] += 1;
    }
  }

  let idx = 0;

  for (i in reportList) {
    let obj = reportList[i];
    for (j in obj) {
      if (reportCount[obj[j]] >= k) result[idx] += 1;
    }

    idx++;
  }

  return result;
}
