package com.odiga.mytrip.suggest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.odiga.mytrip.suggest.dao.SuggestDAO;
import com.odiga.mytrip.suggest.vo.SuggestCosVO;

@Service
public class SuggestService {

    @Autowired
        SuggestDAO suggestDAO;

    public List<SuggestCosVO> getSuggestCosList() {
        return suggestDAO.getCourseSuggestList();
    }
}