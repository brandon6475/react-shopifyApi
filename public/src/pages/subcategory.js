import React, { useEffect } from 'react'

import { Section, Container, PageTitle, GridThree } from "../components/layoutComponents"
import OptionCard from "../components/cards/optionCard"
import { useParams } from 'react-router-dom';
import Products from '../components/products'
import { EXCAVATORS, BULLDOZERS, TRACK_LOADERS, SKID_STEERS, MINI_EXCAVATORS, TRACK_ROLLER, TOP_ROLLERS, TLA, TGA, SPROCKETS, SEGMENT_GROUP, IDLERS, TRACK_SHOES, moveViewToTop } from '../util';
import { useState } from 'react';

export default function Category(props) {

    const params = useParams();
    const [query, setQuery] = useState([
        ['tag', params.category],
    ]);

    const slug = params.category ? params.category.readable() : null;
    const s_slug = params.subcategory ? params.subcategory.readable() : null;
    const s_s_slug = params.subsubcategory ? params.subsubcategory.readable() : null;


    let categories = [
        { url: EXCAVATORS, img: 'excavators', title: 'Excavators' },
        { url: BULLDOZERS, img: 'machine-placeholder', title: 'Bulldozers' },
        { url: TRACK_LOADERS, img: 'track-loaders', title: 'track Loaders' },
        { url: SKID_STEERS, img: 'skid-steers', title: 'skid steers' },
        { url: MINI_EXCAVATORS, img: 'Mini-excavator_1', title: 'mini excavators' }];

    if (s_slug)
        categories = [
            { url: TRACK_ROLLER, img: 'track-rollers', title: 'Track rollers' },
            { url: TOP_ROLLERS, img: 'top-roller-2', title: 'Top rollers' },
            { url: TLA, img: 'track-chains 2', title: 'Track chains (TLA)' },
            { url: TGA, img: 'tga', title: 'Track group assembly (TGA)' },
            { url: SPROCKETS, img: 'sprockets', title: 'Sprockets' },
            { url: SEGMENT_GROUP, img: 'segment-group', title: 'Segment group' },
            { url: IDLERS, img: 'idlers', title: 'Idlers' },
            { url: TRACK_SHOES, img: 'track-shoe_2', title: 'Track shoes' }]

    const url = _url => `/categories/${params.category}/` + (params.subcategory ? `${params.subcategory}/` : '') + `${_url}`;

    useEffect(() => {

        if (params.subcategory)
            setQuery([
                ['tag', params.category],
                ['tag', params.subcategory],
            ])

        if (params.subsubcategory)
            setQuery([
                ['tag', params.category],
                ['tag', params.subcategory],
                ['tag', params.subsubcategory],
            ])
    }, [params])

    return (
        <Section>
            <PageTitle className="center">
                <p>{slug}</p>
                {params.subcategory && <h1 className="title">/ {s_slug} {params.subsubcategory && <>/ {s_s_slug}</>}</h1>}
            </PageTitle>
            <Container className="spacing">
                {s_s_slug ? <Products query={query} />
                    : <GridThree>
                        {categories.map(c =>
                            <OptionCard
                                onClick={() => moveViewToTop(400)}
                                to={url(c.url)}
                                img={`../../../images/${c.img}.png`}
                                title={c.title}
                            />
                        )}
                    </GridThree>}
            </Container>
        </Section>
    )
}
