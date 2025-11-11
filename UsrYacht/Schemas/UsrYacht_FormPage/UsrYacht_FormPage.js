define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "5cb9b027-3973-4c63-b544-59e7d5f278b7",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_vvau608",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_vvau608"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_s1l0edy",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_s1l0edy",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_2pt6t24",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_2pt6t24"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_1wfdtos",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_1wfdtos",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CrewNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewNumber_4s0lvpc",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewNumber_4s0lvpc"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_wh0mybl",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_wh0mybl",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengersNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersNumber_co9wkt6",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersNumber_co9wkt6"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_8o15jg4",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_7aiz65m",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_7aiz65m",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_lsyggvm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lsyggvm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8o15jg4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn6_jpk8vf3",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn6_jpk8vf3",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_coiv2wg",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_coiv2wg",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_ylsclxz",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_ylsclxz",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_5w2lpo6",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ManagerEmail_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_38dc4yl",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_38dc4yl",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_psz8etu",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_psz8etu",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_o8ynesv",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_o8ynesv_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rn17u28",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_o8ynesv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_28lfl3p",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_rn17u28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_2kle3n1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2kle3n1_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_28lfl3p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_v4ohrel",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_v4ohrel_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3h515q6DS"
						}
					}
				},
				"parentName": "FlexContainer_28lfl3p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_j8yxsy2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_j8yxsy2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_28lfl3p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nfvb736",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nfvb736_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RentalGridDetail_3h515q6"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j8yxsy2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_6lqpm1z",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_6lqpm1z_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j8yxsy2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_hbwte5w",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hbwte5w_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_hbwte5w_GridDetail_3h515q6",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_3h515q6"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_hbwte5w_SearchValue",
							"GridDetailSearchFilter_hbwte5w_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_28lfl3p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_282abmb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_o8ynesv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RentalGridDetail_3h515q6",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_3h515q6",
					"activeRow": "$GridDetail_3h515q6_ActiveRow",
					"selectionState": "$GridDetail_3h515q6_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_3h515q6_SelectionState"
					},
					"primaryColumnName": "GridDetail_3h515q6DS_Id",
					"columns": [
						{
							"id": "5ba07a98-f462-ae8d-ca37-37eb8fcc4876",
							"code": "GridDetail_3h515q6DS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_3h515q6DS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 132
						},
						{
							"id": "eb541ed5-0753-c5ff-d281-82f9c2b4e7de",
							"code": "GridDetail_3h515q6DS_UsrEndedDate",
							"caption": "#ResourceString(GridDetail_3h515q6DS_UsrEndedDate)#",
							"dataValueType": 8,
							"width": 138
						},
						{
							"id": "95d337b8-89c0-be96-346a-e8f4f2bf7c08",
							"code": "GridDetail_3h515q6DS_UsrAmount",
							"caption": "#ResourceString(GridDetail_3h515q6DS_UsrAmount)#",
							"dataValueType": 32,
							"width": 186
						},
						{
							"id": "5ac67e95-709d-b469-59e5-fa00643a005f",
							"code": "GridDetail_3h515q6DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_3h515q6DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 156
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_282abmb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3h515q6_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3h515q6DS",
							"filters": "$GridDetail_3h515q6 | crt.ToCollectionFilters : 'GridDetail_3h515q6' : $GridDetail_3h515q6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3h515q6_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RentalGridDetail_3h515q6",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3h515q6_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3h515q6DS",
							"filters": "$GridDetail_3h515q6 | crt.ToCollectionFilters : 'GridDetail_3h515q6' : $GridDetail_3h515q6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3h515q6_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_3h515q6_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3h515q6_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RentalGridDetail_3h515q6",
							"filters": "$GridDetail_3h515q6 | crt.ToCollectionFilters : 'GridDetail_3h515q6' : $GridDetail_3h515q6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3h515q6_SelectionState"
						}
					}
				},
				"parentName": "RentalGridDetail_3h515q6",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_3h515q6_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3h515q6DS",
							"filters": "$GridDetail_3h515q6 | crt.ToCollectionFilters : 'GridDetail_3h515q6' : $GridDetail_3h515q6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3h515q6_SelectionState"
						}
					}
				},
				"parentName": "RentalGridDetail_3h515q6",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_vvau608": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrLength_2pt6t24": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 3,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewNumber_4s0lvpc": {
						"modelConfig": {
							"path": "PDS.UsrCrewNumber"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewNumberCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPassengersNumber_co9wkt6": {
						"modelConfig": {
							"path": "PDS.UsrPassengersNumber"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PassengerNumberCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn6_jpk8vf3": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrCaptain_1wfdtos": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrManager_coiv2wg": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrDriveType_wh0mybl": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_7aiz65m": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrNumber_psz8etu": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_ylsclxz": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_38dc4yl": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrTicketPrice_s1l0edy": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_5w2lpo6": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_5w2lpo6"
						}
					},
					"GridDetail_3h515q6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3h515q6DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_hbwte5w_GridDetail_3h515q6",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3h515q6DS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_3h515q6DS.UsrStartDate"
									}
								},
								"GridDetail_3h515q6DS_UsrEndedDate": {
									"modelConfig": {
										"path": "GridDetail_3h515q6DS.UsrEndedDate"
									}
								},
								"GridDetail_3h515q6DS_UsrAmount": {
									"modelConfig": {
										"path": "GridDetail_3h515q6DS.UsrAmount"
									}
								},
								"GridDetail_3h515q6DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_3h515q6DS.CreatedOn"
									}
								},
								"GridDetail_3h515q6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_3h515q6DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_3h515q6DS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_5w2lpo6": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_3h515q6DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndedDate": {
									"path": "UsrEndedDate"
								},
								"UsrAmount": {
									"path": "UsrAmount"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_vvau608;
					console.log("Price = " + price);
					request.$context.PDS_UsrColumn6_jpk8vf3 = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_vvau608' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersNumber_co9wkt6' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_vvau608;
						let passengers = await request.$context.PDS_UsrPassengersNumber_co9wkt6;
						let ticket_price = 0;
						if(passengers != 0) {
							ticket_price = price / passengers;	
						}
						request.$context.PDS_UsrTicketPrice_s1l0edy = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});