package cn.fudan.edu.se.LabWeb.controller;

import cn.fudan.edu.se.LabWeb.domain.News;
import cn.fudan.edu.se.LabWeb.domain.NewsPicture;
import cn.fudan.edu.se.LabWeb.domain.LabMember;
import cn.fudan.edu.se.LabWeb.domain.Paper;
import cn.fudan.edu.se.LabWeb.service.LabService;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

@RestController
public class LabController {

    @Resource
    private LabService labService;

    @RequestMapping("/getLabMemberByGroup")
    public List<LabMember> getLabMemberByGroup() {
        return labService.getLabMemberByGroup();
    }

    @RequestMapping("/getAllNews")
    public List<News> getAllNews() {
        return labService.getAllNews();
    }

    @RequestMapping("/getNewsWithText")
    public List<News> getNewsWithText(@Param("text") String text) {
        return labService.getNewsWithText("%" + text + "%");
    }

    @RequestMapping("/getNewsPicture")
    public List<NewsPicture> getNewsPicture(@Param("newsId") String newsId) {
        return labService.getNewsPicture(newsId);
    }

    @RequestMapping("/getAllPaper")
    public List<Paper> getAllPaper() {
        return labService.getAllPaper();
    }

    @RequestMapping("/getNewsWithLimit")
    public List<News> getNewsWithLimit() {
        return labService.getNewsWithLimit(6);
    }
}
