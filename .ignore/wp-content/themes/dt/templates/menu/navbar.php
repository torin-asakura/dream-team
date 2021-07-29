<?php

use YOOtheme\Arr;

// Config
$config->addAlias('~navbar', '~theme.navbar');

foreach (array_values($items) as $i => $item) {

    $attrs = ['class' => []];
    $children = isset($item->children);
    $indention = str_pad("\n", $level + 1, "\t");
    $title = $item->title;

    // Config
    $config->addAlias('~menuitem', "~theme.menu.items.{$item->id}");

    // Active?
    if ($item->active) {
        $attrs['class'][] = 'uk-active';
    }

    // Icon
    $icon = $config('~menuitem.icon');
    $icon_attrs['class'][] = $item->menu_image_css;
    if (preg_match('/\.(gif|png|jpg|svg)$/i', $icon)) {
        $icon_attrs['class'][] = 'uk-margin-small-right';
        $icon = "<img {$this->attrs($icon_attrs)} src=\"{$icon}\" alt=\"{$item->title}\">";
    } elseif ($icon) {
        $icon_attrs['class'][] = 'uk-margin-small-right';
        $icon = "<span {$this->attrs($icon_attrs)} uk-icon=\"icon: {$icon}\"></span>";
    }

    // Show Icon only
    if ($icon && $config('~menuitem.icon-only')) {
        $title = '';
    }

    // Header
    if ($item->type === 'header' || ($item->type === 'custom' && $item->url === '#')) {

        if (!$children && $level == 1) {
            continue;
        }

        $title = $icon.$title;

        if ($level > 1 && $item->divider && !$children) {
            $title = '';
            $attrs['class'][] = 'uk-nav-divider';
        } elseif ($children) {
            $title = "<a class=\"{$item->class}\" href>{$title}</a>";
        } else {
            $attrs['class'][] = 'uk-nav-header';
        }

        // Link
    } else {

        $link = [];

        if (isset($item->url)) {
            $link['href'] = $item->url;
        }

        if (isset($item->target)) {
            $link['target'] = $item->target;
        }

        if (isset($item->anchor_title)) {
            $link['title'] = $item->anchor_title;
        }

        if (isset($item->anchor_rel)) {
            $link['rel'] = $item->anchor_rel;
        }

        // Additional Class
        if (isset($item->class)) {
            $link['class'] = $item->class;
        }

        if ($title && $subtitle = $level == 1 ? $config('~menuitem.subtitle') : '') {
            $title = "<div>{$title}<div class=\"uk-navbar-subtitle\">{$subtitle}</div></div>";
        }

        $title = "<a{$this->attrs($link)}>{$icon}{$title}</a>";
    }

    // Children?
    if ($children) {

        $children = ['class' => []];
        $attrs['class'][] = 'uk-parent';

        if ($level == 1) {

            $children['class'][] = 'uk-navbar-dropdown';

            $click = ($item->type === 'header' || $item->type === 'custom' && $item->url === '#') && $mode = $config('~navbar.dropdown_click');

            if ($justify = $config('~menuitem.justify') or $click) {

                $boundary = $justify || $config('~navbar.dropbar') && $config('~navbar.dropdown_boundary');

                $children['uk-drop'] = json_encode(array_filter([
                    'clsDrop' => 'uk-navbar-dropdown',
                    'flip' => 'x',
                    'pos' => $justify ? 'bottom-justify' : "bottom-{$config('~navbar.dropdown_align')}",
                    'boundary' => $boundary ? '!.uk-navbar-container' : false,
                    'boundaryAlign' => $boundary,
                    'mode' => $click ? 'click' : 'click,hover',
                ]));
            }

            $columns = Arr::columns($item->children, $config('~menuitem.columns', 1));
            $columnsCount = count($columns);

            $wrapper = [
                'class' => [
                    'uk-navbar-dropdown-grid',
                    "uk-child-width-1-{$columnsCount}"
                ],
                'uk-grid' => true
            ];

            if ($columnsCount > 1 && !$justify) {
                $children['class'][] = "uk-navbar-dropdown-width-{$columnsCount}";
            }

            $columnsStr = '';
            foreach ($columns as $column) {
                $columnsStr .= "<div><ul class=\"uk-nav uk-navbar-dropdown-nav\">\n{$this->self(['items' => $column, 'level' => $level + 1])}</ul></div>";
            }

            $children = "{$indention}<div{$this->attrs($children)}><div{$this->attrs($wrapper)}>{$columnsStr}</div></div>";

        } else {

            if ($level == 2) {
                $children['class'][] = 'uk-nav-sub';
            }

            $children = "{$indention}<ul{$this->attrs($children)}>\n{$this->self(['items' => $item->children, 'level' => $level + 1])}</ul>";
        }
    }

    echo "{$indention}<li{$this->attrs($attrs)}>{$title}{$children}</li>";
}
