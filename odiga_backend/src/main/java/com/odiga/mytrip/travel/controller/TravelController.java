package com.odiga.mytrip.travel.controller;

import com.odiga.mytrip.travel.service.TravelService;
import com.odiga.mytrip.travel.vo.TravelListVO;
import com.odiga.mytrip.api.ApiService;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TravelController {

    @Autowired
    private TravelService travelService;

    @GetMapping("/detail/{contentId}")
    public TravelListVO getTravelInfo(@PathVariable String contentId) throws IOException{
        TravelListVO travelInfo = travelService.TravelList(contentId);
        travelService.updateViewCount(contentId);
        if (travelInfo.getOverview() == null){
            String newOverview = travelService.fetchOverviewData(contentId);

            travelInfo.setOverview(newOverview);
        }
        return travelInfo;
    }
}
